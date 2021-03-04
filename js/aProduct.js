'use strict';

const source = "modules.json";

const shop = new ShoppingCart();

function productNum() {
    let s = document.URL;
    s = s.slice(-2);
    s = s.replace('#', '');

    return Number(s);
}

function addToCart() {
    fetch(source)
    .then(response => response.json())
    .then(jsonData => {
        shop.addToCart(jsonData[productNum()]);
        shop.getItem();
        updateNum();
    });
    return "";
}

function tuoteSivu(i) {
    const tulos = document.getElementById('tuoteInfoDiv');
    fetch(source)
    .then(response => response.json())
    .then((jsonData) => {
        let nimi = jsonData[i].name;
        let hinta = jsonData[i].price;
        let brand = jsonData[i].brand;
        let desc = jsonData[i].description;
        let category = jsonData[i].category;
        let url = jsonData[i].url;
        let spec1 = jsonData[i].specs.aPos;
        let spec2 = jsonData[i].specs.aNeg;
        let spec3 = jsonData[i].specs.aPosSmall;
        let spec4 = jsonData[i].specs.depth;
        let spec5 = jsonData[i].specs.width;
        let spec6 = jsonData[i].specs.height;

        /*
        console.log(nimi);
        console.log(hinta);
        console.log(brand);
        console.log(desc);
        console.log(category);
        console.log(url);
        console.log(spec1);
        console.log(spec2);
        console.log(spec3);
        console.log(spec4);
        console.log(spec5);
        console.log(spec6);
        */


        /*let kuva1 = jsonData[i].imageMain;                    //oikeat kuvat
        let kuva2 = jsonData[i].imageSide;*/
        let kuva1 = "img/samBot.jpg";                           //placeholder kuvat
        let kuva2 = "img/lmmao.jpg";



        let article = document.createElement('article');

        let fig = document.createElement('figure');
        fig.className = "tuoteKuva";

        let image1 = document.createElement('img');                             //tähän säätöö kuvan kokoon
        image1.src = kuva1;
        fig.appendChild(image1);
        article.appendChild(fig);

        let tekstiDiv = document.createElement('div');
        tekstiDiv.id = "teksti";

        let brandJaMalliOtsikko = document.createElement('h2');
        brandJaMalliOtsikko.className = "brand";
        brandJaMalliOtsikko.innerHTML = brand + ", " + nimi;
        tekstiDiv.appendChild(brandJaMalliOtsikko);

        let descPara = document.createElement('p');
        descPara.className = "desc";
        descPara.innerHTML = desc;
        tekstiDiv.appendChild(descPara);


        let specsTeksti = document.createElement('p');
        specsTeksti.className = "specs";
        specsTeksti.innerHTML = "Tekniset tiedot:";
        tekstiDiv.appendChild(specsTeksti);

        let tekninenUL = document.createElement('ul');                              //specsilista
        let kategoriaLI = document.createElement('li');
        kategoriaLI.innerHTML = "kategoria: " + category;
        tekninenUL.appendChild(kategoriaLI);
        let korkeusLI = document.createElement('li');
        korkeusLI.innerHTML = "korkeus: " + spec6 + " U";
        tekninenUL.appendChild(korkeusLI);
        let leveysLI = document.createElement('li');
        leveysLI.innerHTML = "leveys: " +spec5+ " hp";
        tekninenUL.appendChild(leveysLI);
        let syvyysLI = document.createElement('li');
        syvyysLI.innerHTML = "syvyys: " +spec4+ " mm";
        tekninenUL.appendChild(syvyysLI);
        let posLI = document.createElement('li');
        posLI.innerHTML = "+12V: " +spec1+ " mA";
        tekninenUL.appendChild(posLI);
        let negLI = document.createElement('li');
        negLI.innerHTML = "+12V: " +spec2+ " mA";
        tekninenUL.appendChild(negLI);
        let midLI = document.createElement('li');
        midLI.innerHTML = "+12V: " +spec3+ " mA";
        tekninenUL.appendChild(midLI);
        tekstiDiv.appendChild(tekninenUL);

        let hintaTeksti = document.createElement('p');
        hintaTeksti.className = "hinta";
        hintaTeksti.innerHTML = "Hinta: " + hinta + " euroa"
        tekstiDiv.appendChild(hintaTeksti);

        let ostoskoriNappi = document.createElement('button');
        ostoskoriNappi.type = "button";
        ostoskoriNappi.innerHTML = "Lisää ostoskoriin"
        ostoskoriNappi.addEventListener('click', addToCart);
        tekstiDiv.appendChild(ostoskoriNappi);

        let linkki = document.createElement('a');
        linkki.id = "linkki";
        linkki.href = url;
        linkki.innerHTML = "Tuotteen omat sivut";
        tekstiDiv.appendChild(linkki);


        article.appendChild(tekstiDiv);
        tulos.appendChild(article);


    });
}

tuoteSivu(productNum());

function updateNum(){
    let cartNum = document.createElement('p');
    cartNum.appendChild(document.createTextNode(String(shop.getItem().length)));
    let buyButton = document.querySelector('#cartIcon');
    buyButton.innerHTML = '';
    buyButton.appendChild(cartNum);
}

updateNum();
