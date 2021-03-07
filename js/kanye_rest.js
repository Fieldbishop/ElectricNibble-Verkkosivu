'use strict'

//Etusivulla satunnainen Kanye West twiitti
//Haetaan API:n avulla

const ye = document.querySelector('#ye');                               //Valitaan elementti johon twiitti laitetaan

fetch('https://api.kanye.rest/').then(function(vastaus) {         //Haetaan fetchin avulla apin JSON
    return vastaus.json();
}).then(function(json) {
    let quote = document.createElement('h3');                           //Palautettu asetetaan h3 elementtiin
    quote.appendChild(document.createTextNode(json.quote));                     //Ja lisätään haluttuun elementtiin
    ye.appendChild(quote);
    let p = document.createElement('p');                                //Lisätään myös "~ Kanye West" teksti
    p.appendChild(document.createTextNode("~ Kanye West"));
    ye.appendChild(p);
});

