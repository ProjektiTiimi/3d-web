# 3d-web

## Projektin ajaminen Dockerissa

### Esivaatimukset

Projektin toiminta Dockerissa vaatii Dockerin asentamisen koneelle. Osoitteesta https://docs.docker.com/get-docker/ löytyy asennusohjeet ja -tiedostot eri käyttöjärjestelmille.

Asennuksen jälkeen voit testata, että docker on asentunut onnistuneesti ajamalla komentorivillä komennon:

```
docker --version
```

### Projektin käynnistys

1. Kloonaa tai lataa projekti omalle koneelle
2. Avaa terminaali ja siirry projektin pääkansioon /3D-WEB
3. Aja komento:
```
docker-compose up --build
```
### Docker-compose.yml

Compose-filen toiminnasta löytyy lisää tietoa osoitteesta https://docs.docker.com/compose/compose-file/.

Projektin docker-compose.yml määrittää projektin networkiin tulevat kontit, jokaisen imagen rakennusohjeet (Dockerfilet) ja pääkansion. Lisäksi määritellään portit yhteyksiä varten, ja "tty: true" mahdollistaa komentoriviyhteyden kontin sisään.

### Dockerfile

Projekti koostuu neljästä osiosta jotka pyörivät omissa konteissaan. Jokaisesta pääkansiosta (RobotFramework, frontend, backend/api sekä backend/database) löytyy dockerfile, jonka avulla docker-compose rakentaa imagen ja kontin. 

#### Tietokannan dockerfile
[Dockerfile](https://github.com/ProjektiTiimi/3d-web/blob/main/backend/database/Dockerfile)  käyttää mongoDB:n virallista imagea, ja määrittää autentikoinnin ja tietokannan nimen. **Tunnus ja salasana on syytä vaihtaa projektia käyttöönottaessa**

#### Rajapinnan dockerfile
[Dockerfile](https://github.com/ProjektiTiimi/3d-web/blob/main/backend/api/Dockerfile) asentaa package.jsonin määrittämät riippuvuudet komennolla npm install, ja tämän jälkeen luo salausavaimet sekä tallentaa ne .env tiedostoon. Lopuksi avataan portti 1337, ja käynnistetään rajapinta. 

#### Frontin dockerfile
[Dockerfile](https://github.com/ProjektiTiimi/3d-web/blob/main/frontend/Dockerfile) kopioi frontend-kansion konttiin ja asentaa riippuvuudet kuten rajapinnassakin. Websivu avataan porttiin 3000. 

#### Robottitestien dockerfile
[Dockerfile](https://github.com/ProjektiTiimi/3d-web/blob/main/RobotFramework/Dockerfile) asentaa imageen RF-testien vaatimat asiat, kuten pythonin ja itse robot frameworkin käytettyine kirjastoineen. Lisäksi asennetaan webdrivermanager ja chrome UI-testausta varten. API-testi vaatii venv käytön toimiakseen, sen ajaminen kontissa toimii avaamalla komentorivi robot-kansioon, ja ajamalla siellä [komennot](https://github.com/ProjektiTiimi/3d-web/tree/main/RobotFramework#rajapintatestin-ajaminen-paikallisesti) 


### Projektin osasten readme-tiedostot alla

[Robot-readme](https://github.com/ProjektiTiimi/3d-web/tree/main/RobotFramework#readme)

[Database-readme](https://github.com/ProjektiTiimi/3d-web/tree/main/backend/database#readme)

[API-readme](https://github.com/ProjektiTiimi/3d-web/tree/main/backend/api#readme)

[Front-readme](https://github.com/ProjektiTiimi/3d-web/tree/main/frontend#readme)

###
