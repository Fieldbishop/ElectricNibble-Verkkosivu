'use strict';

function productNum() {
    let s = document.URL;
    s = s.slice(-2);
    s = s.replace('#', '');

    return Number(s);
}

function tuoteSivu(i) {
    const source = "modules.json"
    const tulos = document.querySelector('main');
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


        /*let kuva1 = jsonData[i].imageMain;                    //oikeat kuvat
        let kuva2 = jsonData[i].imageSide;*/
        let kuva1 = "img/samBot.jpg";                           //placeholder kuvat
        let kuva2 = "img/lmmao.jpg";


        /*
        let article = document.createElement('article');
        article.className = "product";

        let fig = document.createElement('figure');
        let a = document.createElement('a');
        a.id = i;
        a.className = "productImg";
        a.href = "$product0";                                   //linkki tuotteen sivuille kuvaa klikkaamalla
        a.style = `background-image: url('${kuva1}')`;
        let image = document.createElement('img');
        image.src = kuva2
        a.appendChild(image);

        let div = document.createElement('div');
        div.className="animated";
        let pNimi = document.createElement('p');
        let pHinta = document.createElement('p');
        pNimi.innerHTML=nimi;
        pHinta.innerHTML=hinta + " euroa";
        div.appendChild(pNimi);
        div.appendChild(pHinta);

        fig.appendChild(a);
        fig.appendChild(div);
        article.appendChild(fig);
        tulos.appendChild(article);

         */
    });
}

tuoteSivu(productNum());

