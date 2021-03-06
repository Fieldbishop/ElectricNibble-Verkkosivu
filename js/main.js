'use strict'

const main = document.querySelector('main');    //Näyteikkuna johon laitetaan näkyville 6 tuotetta

const url = "modules.json";     //Url josta Moduuli JSON haetaan

const shop = new ShoppingCart();    //Luodaan uusi ostoskori, joka hakee ostoskorin tuotteiden määrän

fetch(url)      //Haetaan Moduuli JSON
.then(response => response.json())
.then((jsonData) => {
    mainPage(jsonData);     //Rakennetaan JSON:in pohjalta pääsivu
});


//Funktio joka rakentaa näyteikkunan jsonin datasta.

function mainPage(json) {

    /*
    Näyteikkunassa näytetään satunnainen tuote.
    Satunnainen numero Jsonin pituudesta, ei samaa numeroa kahta kertaa.
    Rakennetaan satunnainen numerosarja Array, jota kutsutaan for loopin i:llä
    */

    let rand;   //Satunnainen numero tallennetaan tähän
    let num = [];   //Tyhjä Array johon täytetään numerot

    while(num.length < 6) { //Haetaan kuusi tuotetta
        rand = Math.floor(Math.random() * json.length) //Random 0 - jsonin pituus
        if(!num.includes(rand)) {               //Jos rand ei ole Arrayssa
            num.push(rand);                     //Lisää Arrayhin
        }
    }

    //Rakennetaan näkymä, hakemalla json data oikeisiin kohtiin

    for(let i = 0; i < 6; i++) { //Näytetään vain 6 tuotetta etusivulla

        let article = document.createElement('article');
        article.className = "product";  //product class
        article.addEventListener('click', function(){
            console.log(num[i]);
        });

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

        infoContainer.addEventListener("click", function(){
            window.open('./aProduct.html#' + num[i], '_self');
        });

        figure.appendChild(infoContainer);
        article.appendChild(figure);

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

iconCart();     //Näytetään tuotteiden määrä ostoskorissa
