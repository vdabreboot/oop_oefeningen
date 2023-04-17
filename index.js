"use strict";

class GoedDoel {
    #opbrengst = 0; 
    #naam;
    #adres;
    #contactpersonen=[];
    constructor(naam, adres){
        this.#opbrengst = 0;
        this.#naam = naam;
        this.#adres = adres;
    }
    stort(bedrag) { 
        this.#opbrengst += bedrag; 
    } 
    getOpbrengst() {
        return this.#opbrengst;
    }
    getAdres() {
        return this.#adres;
    }
    voegContactpersoonToe(persoon){
        this.#contactpersonen.push(persoon);
    }
    getContactpersonen(){
        return this.#contactpersonen;
    }
}
class Adres {
    #straat;
    #huisnummer;
    #postcode;
    #gemeente;    
    constructor(straat , huisnummer, postcode, gemeente){
        this.#straat = straat;
        this.#huisnummer = huisnummer;
        this.#postcode = postcode;
        this.#gemeente = gemeente;
    }
    getVolledigAdres(){
        return `${this.#straat} ${this.#huisnummer} ${this.#postcode} ${this.#gemeente}`;
    }
}
class Persoon {
    #voornaam;
    #familienaam;
    constructor(voornaam, familienaam){
        this.#voornaam = voornaam;
        this.#familienaam = familienaam;
    }
    getNaam(){
        return `${this.#voornaam} ${this.#familienaam}`;
    }
}
/*const komOpTegenKanker = new GoedDoel();
komOpTegenKanker.stort(100); 
komOpTegenKanker.stort(200); 
console.log(komOpTegenKanker.getOpbrengst());
const cliniClowns = new GoedDoel();
cliniClowns.stort(500); 
console.log(cliniClowns.getOpbrengst());*/

const cliniClowns = new GoedDoel("CliniClowns" , new Adres("Prins Boudewijnlaaan","141",2610,"Wilrijk"));

cliniClowns.voegContactpersoonToe(new Persoon("Arthur", "Janssens")); 
cliniClowns.voegContactpersoonToe(new Persoon("Emma", "Peeters")); 
console.log(cliniClowns.getAdres());
for (const persoon of cliniClowns.getContactpersonen()) { 
    console.log(persoon.getNaam()); 
}