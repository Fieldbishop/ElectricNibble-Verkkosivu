'use strict';

const source = "modules.json";

const shop = new ShoppingCart();        //Luodaan ostoskori-olio

//Klikatessa tuotetta, se avaa tuotesivun jossa lopussa on "#" ja tuotteen index numero
//Index numeron avulla tuotteen tiedot haetaan JSON:ista ja tiedot tuodaan esille
function productNum() {
    let s = document.URL;   //Tallentaa nykyisen URL:in
    s = s.slice(-2);        //Ottaa URL:ista kaksi viimeistä merkkiä
    s = s.replace('#', ''); //Jos yksi niistä on "#", poistaa sen

    return Number(s);       //Palauttaa index numeron
}

//Lisää tuote ostoskoriin
function addToCart() {
    fetch(source)   //Haetaan tuotteen tiedot JSON:ista
    .then(response => response.json())
    .then(jsonData => {
        shop.addToCart(jsonData[productNum()]);     //Lisätään se ostoskoriin
        iconCart(); //Päivitetään ostoskorikuvaketta
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


        let kuva1 = jsonData[i].imageMain;                    //oikeat kuvat
        let kuva2 = jsonData[i].imageSide;
        /*let kuva1 = "img/samBot.jpg";                           //placeholder kuvat
        let kuva2 = "img/lmmao.jpg";*/



        let article = document.createElement('article');

        let tuoteKuvaSliderDiv = document.createElement('div');
        tuoteKuvaSliderDiv.className = "tuoteKuvaSlider";

        let slideShowContainerDiv = document.createElement('div');
        slideShowContainerDiv.className="slideshow-container";

        let tuoteKuvaDiv = document.createElement('div');
        tuoteKuvaDiv.className = "mySlides fade";
        tuoteKuvaDiv.style="display: block;";
        let img1 = document.createElement('img');
        img1.style="width:100%";
        img1.src=kuva1;
        tuoteKuvaDiv.appendChild(img1);

        let tuoteKuvaDiv2 = document.createElement('div');
        tuoteKuvaDiv2.className = "mySlides fade";
        tuoteKuvaDiv.style="display: block;";
        let img2 = document.createElement('img');
        img2.style="width:100%";
        img2.src=kuva2;
        tuoteKuvaDiv2.appendChild(img2);

        slideShowContainerDiv.appendChild(tuoteKuvaDiv);
        slideShowContainerDiv.appendChild(tuoteKuvaDiv2);

        slideShowContainerDiv.innerHTML += `
        <a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>
        <a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>`

        tuoteKuvaSliderDiv.appendChild(slideShowContainerDiv);
        tuoteKuvaSliderDiv.innerHTML += "<br>"

        article.appendChild(tuoteKuvaSliderDiv);

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
        specsTeksti.innerHTML = "Technical info:";
        tekstiDiv.appendChild(specsTeksti);

        let tekninenUL = document.createElement('ul');                              //specsilista
        let kategoriaLI = document.createElement('li');
        kategoriaLI.innerHTML = "category: " + category;
        tekninenUL.appendChild(kategoriaLI);
        let korkeusLI = document.createElement('li');
        korkeusLI.innerHTML = "height: " + spec6 + " U";
        tekninenUL.appendChild(korkeusLI);
        let leveysLI = document.createElement('li');
        leveysLI.innerHTML = "width: " +spec5+ " hp";
        tekninenUL.appendChild(leveysLI);
        let syvyysLI = document.createElement('li');
        syvyysLI.innerHTML = "depth: " +spec4+ " mm";
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
        hintaTeksti.innerHTML = "Price: " + hinta + " euros"
        tekstiDiv.appendChild(hintaTeksti);

        let ostoskoriNappi = document.createElement('button');
        ostoskoriNappi.type = "button";
        ostoskoriNappi.innerHTML = "Add to cart"
        ostoskoriNappi.addEventListener('click', addToCart);
        tekstiDiv.appendChild(ostoskoriNappi);

        let linkki = document.createElement('a');
        linkki.id = "linkki";
        linkki.href = url;
        linkki.innerHTML = "Link to the manufacturer's web page";
        tekstiDiv.appendChild(linkki);


        article.appendChild(tekstiDiv);
        tulos.appendChild(article);


    });
}

tuoteSivu(productNum());
iconCart();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
