# Natuurlijkwinkelen.nl

Een Nederlandse webwinkel voor natuurlijke producten, voedingssupplementen en verzorging.

## Project Structuur

Dit project is een statische HTML/CSS/JavaScript website voor een e-commerce platform.

### Belangrijke bestanden:

- `index.html` - Homepage
- `products.html` - Productoverzichtspagina
- `detail.html` - Productdetailpagina
- `basket.html` - Winkelwagenpagina
- `checkout-*.html` - Checkout processtappen
- `account.html` - Klantaccountpagina
- `settings.html` - Instellingenpagina
- `client-info.json` - **Centraal klantinformatiebestand**

## Klantinformatie (Client Info)

Het bestand `client-info.json` bevat alle belangrijke bedrijfsinformatie op één centrale plek:

### Inhoud van client-info.json:

```json
{
  "company": {
    "name": "Bedrijfsnaam",
    "legalName": "Officiële bedrijfsnaam",
    "description": "Bedrijfsomschrijving",
    "url": "Website URL"
  },
  "contact": {
    "email": "Contact e-mailadres",
    "phone": "Telefoonnummer",
    "workingHours": "Openingstijden klantenservice"
  },
  "address": {
    "street": "Straatnaam en huisnummer",
    "postalCode": "Postcode",
    "city": "Stad",
    "country": "Land"
  },
  "businessDetails": {
    "kvkNumber": "KVK-nummer",
    "btwNumber": "BTW-nummer",
    "ibanNumber": "IBAN (optioneel)"
  },
  "social": {
    "facebook": "Facebook URL",
    "instagram": "Instagram URL",
    "youtube": "YouTube URL"
  },
  "shipping": {
    "freeShippingThreshold": "Gratis verzending vanaf bedrag",
    "deliveryTime": "Levertijd",
    "returnPolicy": "Retourbeleid"
  },
  "legal": {
    "termsUrl": "Link naar algemene voorwaarden",
    "privacyUrl": "Link naar privacyverklaring",
    "cookieUrl": "Link naar cookiebeleid"
  }
}
```

### Gebruik:

1. **Handmatig bijwerken**: Bewerk `client-info.json` om bedrijfsinformatie bij te werken
2. **JavaScript integratie**: Laad dit bestand in met JavaScript om dynamisch content te updaten
3. **Build tools**: Gebruik build tools om placeholders in HTML te vervangen met waarden uit dit bestand

### Voordelen:

- ✅ Eén centrale plek voor alle bedrijfsinformatie
- ✅ Makkelijk bij te werken zonder door meerdere HTML-bestanden te zoeken
- ✅ Consistent contactgegevens over alle pagina's
- ✅ Geschikt voor toekomstige automatisering

## Technologieën

- HTML5
- CSS3
- JavaScript
- Swiper.js (voor sliders)

## Contact

Voor vragen over de website:
- **E-mail**: info@natuurlijkwinkelen.nl
- **Telefoon**: +31 (0)85 792 01 80
- **Bereikbaar**: Werkdagen van 09:00 tot 17:00 uur
