'use strict';

const url = "modules.json";     //Url josta Moduuli JSON haetaan

const shop = new ShoppingCart();    //Luodaan uusi ostoskori, joka hakee ostoskorin tuotteiden määrän

fetch(url)      //Haetaan Moduuli JSON
.then(response => response.json())
.then((jsonData) => {
    updateProducts(jsonData, 0);    //Rakennetaan JSON:in pohjalta sivu
});

//Event listener sivupalkin kategorioille
const li = document.getElementsByTagName('li');     //Haetaan sivupalkki

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function(f) {         //Klikkaamalla kategoriaa, haetaan moduuli JSON
        fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
            for(let i = 0; i < li.length; i++){                                 //Muutetaan kaikista muista kategorioista ei valittuja
                li[i].className = "";
            }
            f.target.className = "selected";                                    //Ja klikatusta valittu muuttamalla väri
            scroll(0,0);                                                        //Asetetaan näkymä ylös
            updateProducts(jsonData, i);                                        //Rakennetaan JSON:in ja kategorian pohjalta sivu
        });
    });
}


//Tuo esiin ja piilota sivupalkki
const cat = document.getElementsByClassName('sidebarB');
const sideBar = document.getElementById('sidebar');
let open = false;

//Lisätään pallolle kuuntelija joka muuttaa sivupalkin luokkaa
//CSS hoitaa animaation
cat[0].addEventListener('click', function() {
    if (open) {
        sideBar.className = '';
    } else {
        sideBar.className = 'open';
    }
    open = !open; //Toggle button
});


const main = document.querySelector('main');    //Valitaan elementti jonka sisälle tuotteet rakennetaan

function updateProducts(json, num) {
    main.innerHTML = '<div></div>';     //Tyhjennetään sivu

    /*
    Oikean JSON:in category arvo: json[i].category

        Kategoriat
            All                 0
            Compressor          1
            Delay               2
            Distortion          3
            Effects processor   4
            Filter              5
            LPG                 6
            Mixer               7
            Modulator           8
            Oscillator          9
            Percussion          10
            Reverb              11
            Sequencer           12
            Utility             13
            VCA                 14

        }

    Jos kategoria on jotain ja tuote ei ole kategoriaa, tarkastetaan seuraava tuote
    Jos kategoria on jotain ja tuote on samaa kategoriaa, päästään loopin loppuun jossa luodaan elementti tuotteelle

    */

    for (let i = 0; i < json.length; i++) {

        if (num === 1 && json[i].category !== 'Compressor') {

        } else if (num === 2 && json[i].category !== 'Delay') {

        } else if (num === 3 && json[i].category !== 'Distortion') {

        } else if (num === 4 && json[i].category !== 'Effects processor') {

        } else if (num === 5 && json[i].category !== 'Filter') {

        } else if (num === 6 && json[i].category !== 'LPG') {

        } else if (num === 7 && json[i].category !== 'Mixer') {

        } else if (num === 8 && json[i].category !== 'Modulator') {

        } else if (num === 9 && json[i].category !== 'Oscillator') {

        } else if (num === 10 && json[i].category !== 'Percussion') {

        } else if (num === 11 && json[i].category !== 'Reverb') {

        } else if (num === 12 && json[i].category !== 'Sequencer') {

        } else if (num === 13 && json[i].category !== 'Utility') {

        } else if (num === 14 && json[i].category !== 'VCA') {

        } else {


            let article = document.createElement('article');
            article.className = 'product';

            let figure = document.createElement('figure');
            let a = document.createElement('a');
            a.className = 'productImg';
            a.id = String(i);
            a.href = './aProduct.html#' + i;

            let img = document.createElement('img');
            //img.src = json[num[i]].imageSide;

            //!!!PLACEHOLDER!!!
            if (i % 2) {
                img.src = 'img/samBot.jpg';
            } else {img.src = 'img/lmmao.jpg';}

            a.appendChild(img);

            let infoContainer = document.createElement('div');
            let name = document.createElement('p');
            let price = document.createElement('p');

            infoContainer.className = 'animated';

            figure.appendChild(a);

            name.appendChild(document.createTextNode(json[i].name));
            price.appendChild(document.createTextNode(json[i].price + '€'));

            infoContainer.appendChild(name);
            infoContainer.appendChild(price);

            infoContainer.addEventListener("click", function(){
                window.open('./aProduct.html#' + i, '_self');
            });

            figure.appendChild(infoContainer);
            article.appendChild(figure);

            main.appendChild(article);
            //document.getElementById(String(num[i])).style.backgroundImage = "url('" + json[num[i]].imageMain + "')";

            //!!!PLACEHOLDER!!!
            if (i % 2) {
                document.getElementById(
                    String(
                        i)).style.backgroundImage = "url('img/lmmao.jpg')";
            } else {
                document.getElementById(
                    String(
                        i)).style.backgroundImage = "url('img/samBot.jpg')";
            }
        }

    }

    /*
    Tuottaa seuraavan elementin
    <article class="product">
        <figure>
            <a class="productImg" id="0" href="./aProduct.html#0" style="background-image: url(&quot;img/mainImage&quot;);">
                <img src="img/secondaryImage.jpg">
            </a>
            <div class="animated">
                <p>Name</p>
                <p>Price €</p>
            </div>
        </figure>
    </article>

    Kaksi päällekkäistä kuvaa saadaan piilottamalla toinen ja näyttämällä se on hover
     */

}

iconCart();     //Näytetään tuotteiden määrä ostoskorissa
