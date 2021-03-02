'use strict'

const main = document.querySelector('main');    //Näyteikkuna johon laitetaan näkyville 6 tuotetta


//Json rakennetaan manuaalisesti offline versiossa
let json = '[{"name": "First", "price": 25, "picture": {"yksi": "img/lmmao.jpg", "kaksi": "img/samBot.jpg"}}, {"name": "Second", "price": 26, "picture": {"yksi": "img/samBot.jpg", "kaksi": "img/lmmao.jpg"}}, {"name": "Third", "price": 27, "picture": {"yksi": "img/lmmao.jpg", "kaksi": "img/samBot.jpg"}}, {"name": "Fourth", "price": 28, "picture": {"yksi": "img/samBot.jpg", "kaksi": "img/lmmao.jpg"}}, {"name": "Fifth", "price": 29, "picture": {"yksi": "img/lmmao.jpg", "kaksi": "img/samBot.jpg"}}, {"name": "Sixth", "price": 30, "picture": {"yksi": "img/samBot.jpg", "kaksi": "img/lmmao.jpg"}}]'

//JSON.parse muuntaa json stringistä Arrayn. Kun serverillä, turha.
let jsonObj = JSON.parse(json);


/*
//Kun serverillä, käytetään tätä Jsonin saamiseksi. Laita jsonin osoite fetch:iin
fetch("JSON OSOITE")
.then(function(vastaus) {
    return vastaus.json();
}).then(function(json) {
    mainPage(json);
}).catch(function(error) {
    alert(error);
    console.log(error);
});*/

//Funktio joka rakentaa näyteikkunan jsonin datasta.

function mainPage(json) {

    /*
    Näyteikkunassa näytetään satunnainen tuote.
    Satunnainen numero Jsonin pituudesta, ei samaa numeroa kahta kertaa.
    Rakennetaan satunnainen numerosarja Array, jota kutsutaan for loopin i:llä
    */

    let rand;   //Satunnainen numero tallennetaan tähän
    let num = [];   //Tyhjä Array johon täytetään numerot

    while(num.length < json.length) {
        rand = Math.floor(Math.random() * 6) //Random 0 - 5
        if(!num.includes(rand)) {               //Jos rand ei ole Arrayssa
            num.push(rand);                     //Lisää Arrayhin
        }
    }

    //Rakennetaan näkymä, hakemalla json data oikeisiin kohtiin

    for(let i = 0; i < 6; i++) { //Näytetään vain 6 tuotetta etusivulla

        let article = document.createElement('article');
        article.className = "product";  //product class

        let figure = document.createElement('figure');
        let a = document.createElement('a');
        a.className = 'productImg';
        a.id = String(num[i]);
        a.href = './aProduct.html#' + num[i];

        let img = document.createElement('img');
        //img.src = json[num[i]].imageSide;

        //!!!PLACEHOLDER!!!
        if(i % 2) {
            img.src = "img/samBot.jpg";
        } else {img.src = "img/lmmao.jpg"}

        a.appendChild(img);

        let infoContainer = document.createElement('div');
        let name = document.createElement('p');
        let price = document.createElement('p');

        infoContainer.className = "animated";

        figure.appendChild(a);

        name.appendChild(document.createTextNode(json[num[i]].name));
        price.appendChild(document.createTextNode(json[num[i]].price + "€"));

        infoContainer.appendChild(name);
        infoContainer.appendChild(price);
        figure.appendChild(infoContainer);
        article.appendChild(figure);

        article.addEventListener('click', function() {
            console.log(num[i]);
        });

        main.appendChild(article);
        //document.getElementById(String(num[i])).style.backgroundImage = "url('" + json[num[i]].imageMain + "')";

        //!!!PLACEHOLDER!!!
        if(i % 2) {
            document.getElementById(
                String(num[i])).style.backgroundImage = "url('img/lmmao.jpg')";
        } else {
            document.getElementById(
                String(num[i])).style.backgroundImage = "url('img/samBot.jpg')";
        }


    }

    /*
    Tuottaa seuraavan article HTML elementin
    <article class="product">
    <figure>
        <a id="0" class="productImg" href="#product0" style="background-image: url('img/.jpg');">
            <img src="img/.jpg">
        </a>
        <div class="animated">
            <p>Name</p>
            <p>Price</p>
        </div>
    </figure>
    </article>
     */

}

mainPage(jsonObj); //Kutsutaan funktiota joka luo näyteikkunan
