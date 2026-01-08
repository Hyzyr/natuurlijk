/**
 * Client Information Utility
 * 
 * This module provides easy access to centralized client information
 * stored in client-info.json
 */

class ClientInfo {
  constructor(configPath = './client-info.json') {
    this.configPath = configPath;
    this.data = null;
    this.loaded = false;
  }

  /**
   * Load client information from client-info.json
   * @returns {Promise<Object>} The client information data
   */
  async load() {
    if (this.loaded) {
      return this.data;
    }

    try {
      const response = await fetch(this.configPath);
      if (!response.ok) {
        throw new Error(`Failed to load client info: ${response.status}`);
      }
      this.data = await response.json();
      this.loaded = true;
      return this.data;
    } catch (error) {
      console.error('Error loading client info:', error);
      throw error;
    }
  }

  /**
   * Get company information
   * @returns {Object} Company data
   */
  getCompany() {
    return this.data?.company || {};
  }

  /**
   * Get contact information
   * @returns {Object} Contact data
   */
  getContact() {
    return this.data?.contact || {};
  }

  /**
   * Get address information
   * @returns {Object} Address data
   */
  getAddress() {
    return this.data?.address || {};
  }

  /**
   * Get business details (KVK, BTW, etc.)
   * @returns {Object} Business details
   */
  getBusinessDetails() {
    return this.data?.businessDetails || {};
  }

  /**
   * Get social media links
   * @returns {Object} Social media data
   */
  getSocial() {
    return this.data?.social || {};
  }

  /**
   * Get shipping information
   * @returns {Object} Shipping data
   */
  getShipping() {
    return this.data?.shipping || {};
  }

  /**
   * Get legal information (terms, privacy, etc.)
   * @returns {Object} Legal data
   */
  getLegal() {
    return this.data?.legal || {};
  }

  /**
   * Update all elements with data-client-info attribute
   * 
   * Usage in HTML:
   * <span data-client-info="contact.email"></span>
   * <span data-client-info="contact.phone"></span>
   * <a href="mailto:" data-client-info="contact.email" data-client-info-attr="href:mailto:{value}"></a>
   */
  updateDOM() {
    const elements = document.querySelectorAll('[data-client-info]');
    
    elements.forEach(element => {
      const path = element.getAttribute('data-client-info');
      const value = this.getNestedValue(path);
      
      if (value) {
        // Check if we need to update an attribute instead of text content
        const attrConfig = element.getAttribute('data-client-info-attr');
        
        if (attrConfig) {
          // Format: "attrName:template"
          // Validate format before processing
          if (!attrConfig.includes(':')) {
            console.warn(`Invalid data-client-info-attr format: ${attrConfig}. Expected "attrName:template"`);
            return;
          }
          
          const colonIndex = attrConfig.indexOf(':');
          const attrName = attrConfig.substring(0, colonIndex);
          const template = attrConfig.substring(colonIndex + 1);
          const attrValue = template.replace('{value}', value);
          element.setAttribute(attrName, attrValue);
        } else {
          // Update text content
          element.textContent = value;
        }
      }
    });
  }

  /**
   * Get nested value from object using dot notation
   * @param {string} path - Dot notation path (e.g., "contact.email")
   * @returns {any} The value at the path
   */
  getNestedValue(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], this.data);
  }

  /**
   * Initialize and update DOM
   * Convenience method to load data and update DOM in one call
   */
  async init() {
    await this.load();
    this.updateDOM();
  }
}

// Create a global instance with default path
// You can customize the path: new ClientInfo('/custom/path/client-info.json')
const clientInfo = new ClientInfo();

// Example usage:
// 
// // Initialize on page load with default path
// document.addEventListener('DOMContentLoaded', async () => {
//   await clientInfo.init();
// });
//
// // Or use a custom config path
// const customClientInfo = new ClientInfo('/config/client-info.json');
// await customClientInfo.init();
//
// // Or load and use manually
// clientInfo.load().then(() => {
//   const contact = clientInfo.getContact();
//   console.log('Email:', contact.email);
//   console.log('Phone:', contact.phone);
// });

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ClientInfo;
}
