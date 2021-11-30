# 3D-web Backend

## Projektin backendin ajaminen paikallisesti

### Esivaatimukset

Jotta sovellusta voi ajaa paikallisesti koneella, lataa Node.js osoitteesta: https://nodejs.org/en/download/. 
Kun Node.js on asennettu, testaa että se toimii ajamalla komentorivillä komento:

```
npm --version
```

Muokkaa tiedostoa /api/src/config/config.ts vastaamaan käyttämääsi tietokantaa ja porttia.
```
export const PORT = 1337;
export const DBURI = 'mongodb://admin:pass@3d-web-mongo-1:27017/UusiDB?authSource=admin';
```
Voit myös halutessasi muokata riviä SECRETKEY tarpeesi mukaan.

### Kun esivaatimukset ovat suoritettu:

1. Kloonaa tai lataa projekti omalle koneelle
2. Avaa terminaali ja siirry projektin kansioon /3D-WEB/backend
3. Aja komento mikäli node_modules kansio ei latautunut
```
npm install
```
4. Aja komento:
```
npm run setKeys
npm run dev
```
Sovellus jää terminaaliin pyörimään ja käynnistää itsensä uudestaan jokaisen tallennetun muutoksen jälkeen:
```
[INFO] 17:26:01 Restarting: \api\src\config\config.ts has been modified
App running on port  12343
```

### Routet

Uusia routeja voi vapaasti lisätä ja muokata. Käyttäessä [authJwt.verifyToken] sovellus vaatii localStoragessa olevan hyväksytyn tokenin, ennenkuin päästää etenemään reitillä.
