'use strict';

let json = '[{"name": "First", "price": 25, "picture": {"yksi": "img/lmmao.jpg", "kaksi": "img/samBot.jpg"}, "category": "Compressor"}, {"name": "Second", "price": 26, "picture": {"yksi": "img/samBot.jpg", "kaksi": "img/lmmao.jpg"}, "category": "Compressor"}, {"name": "Third", "price": 27, "picture": {"yksi": "img/lmmao.jpg", "kaksi": "img/samBot.jpg"}, "category": "Delay"}, {"name": "Fourth", "price": 28, "picture": {"yksi": "img/samBot.jpg", "kaksi": "img/lmmao.jpg"}, "category": "Delay"}, {"name": "Fifth", "price": 29, "picture": {"yksi": "img/lmmao.jpg", "kaksi": "img/samBot.jpg"}, "category": "Delay"}, {"name": "Sixth", "price": 30, "picture": {"yksi": "img/samBot.jpg", "kaksi": "img/lmmao.jpg"}, "category": "LPG"}]';
let jsonObj = JSON.parse(json);

//Event listener sivupalkin kategorioille
const li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function() {
        updateProducts(jsonObj, i);
    });
}

//Tuo esiin ja piilota sivupalkki
const cat = document.getElementsByClassName('circle');
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

const main = document.querySelector('main');

function updateProducts(json, num) {
    main.innerHTML = '<div></div>';

    /*Oikean JSON:in category arvo: json[i].category

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

            Yksi tapa tehdä
            switch(num) {
            case 1:
                checkCategory("Compressor");
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            case 5:

                break;
            case 6:

                break;
            case 7:

                break;
            case 8:

                break;
            case 9:

                break;
            case 10:

                break;
            case 11:

                break;
            case 12:

                break;
            case 13:

                break;
            case 14:

                break;
            default:

        }
    */

    for (let i = 0; i < json.length; i++) {

        if (num === 1 && json[i].category !== 'Compressor') {

        } else if (num === 2 && json[i].category !== 'Delay') {

        } else if (num === 3 && json[i].category !== 'Distorion') {

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
            article.addEventListener('click', function(){
                console.log(i);
            });

            let figure = document.createElement('figure');
            let a = document.createElement('a');
            a.className = 'productImg';
            a.id = String(i);
            a.href = './product.html#' + i;

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
            figure.appendChild(infoContainer);
            article.appendChild(figure);

            article.addEventListener('click', function() {
                console.log(i);
            });

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

}

updateProducts(jsonObj, 0);
