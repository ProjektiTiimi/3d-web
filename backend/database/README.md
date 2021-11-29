# MongoDB

MongoDB on NoSQL-pohjainen tietokanta, missä tiedot tallenetaan tietokantaan dokumentteina. Tässä projektissa on yksi tietokanta, missä on kolme collectionia: yksi asiakkaille, yksi käyttäjille sekä yksi laskuille. Data tallenetaan kantaan JSON-muotoisena.

## Käyttäjätunnus ja salasana

Dockerfilessä määritellään kannassa käytettävät käyttäjätunnus ja salasana sekä luodaan ja annetaan kannalle nimi. Alla olevia rivejä muokkaamalla Dockerfilessä voidaan määrittää kannan asetukset.

```
ENV MONGO_INITDB_ROOT_USERNAME <Lisää käyttäjätunnus>

ENV MONGO_INITDB_ROOT_PASSWORD <Lisää salasana>

ENV MONGO_INITDB_DATABASE <Lisää tietokannan nimi>
```

## MongoDB Compass

 Compass on MongoDB:lle saatavilla oleva graafinen käyttöliittymä, minkä avulla voidaan muokata, lisätä tai poistaa kannassa olevia tietoja. Tietokantaan voidaan yhdistää alla olevalla stringillä, jos kanta on suojattu käyttäjätunnuksella ja salasanalla:
 
 ```
 mongodb://<Käyttäjätunnus>:<Salasana>@<Osoite>:<Portti>/<Tietokannan nimi>
 ```
 
 MongoDB käyttää oletusporttina porttia 27017 ja Compasilla voidaan yhdistää sekä lokaalisti että kontissa pyörivään tietokantaan. Kontissa pyörivään tietokantaan yhdistettäessä pitää katsoa docker-compose tiedostosta mikä paikallinen portti on sidottu kontin porttiin. Alla oleva pätkä on tämän projektin docker-composesta, mistä nähdään portin 27019 olevan sidottu kontin 27017 porttiin.
 
 ```
 ports:
      - "27019:27017"
 ``` 
 
 Tämän projektin kontissa pyörivään tietokantaan saadaan Compasilla yhteys seuraavalla stringillä:
 
 ```
 mongodb://admin:pass@localhost:27019/UusiDB
 ```
 
 Compassin saa ladattua osoitteesta: https://www.mongodb.com/try/download/compass
 
 ## MongoDB käyttö komentoriviltä
 
 MongoDB:tä voi käyttää myös komentoriviltä käyttäen mongo shelliä, minkä saa auki komentamalla:
 
 ```
 mongosh -u <käyttäjätunnus> -p <salasana>
 ```
 
 Hyödyllisiä komentoja:
 
 Näytä tietokannat tai näytä collectionit:
 ```
 show dbs
 show collections
 ```
 Valitse tietokanta tai collection
 ```
 use <tietokannan nimi>
 use <collectionin nimi>
 ```
 Näytä collectionin sisältö
 ```
 db.<collectionin nimi>.find()
 ```
 
