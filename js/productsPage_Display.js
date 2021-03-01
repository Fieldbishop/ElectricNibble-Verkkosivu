'use strict';


const source = "modules.json"
const tulokset = document.querySelector('main');
fetch(source)
.then(response => response.json())
.then((jsonData) => {
    for (let i = 0; i < jsonData.length; i++) {
        console.log(jsonData[i].name);
        console.log(jsonData[i].price);
        let nimi = jsonData[i].name;
        let hinta = jsonData[i].price;
        /*let kuva1 = jsonData[i].imageMain;                    //oikeat kuvat
        let kuva2 = jsonData[i].imageSide;*/
        let kuva1 = "img/samBot.jpg"                            //placeholder kuvat
        let kuva2 = "img/lmmao.jpg"


        let article = document.createElement('article');
        article.className = "product";

        let fig = document.createElement('figure');
        let a = document.createElement('a');
        a.id = i;
        a.className = "productImg";
        a.href = "$product0";                                   //linkki tuotteen sivuille kuvaa klikkaamalla
        a.style = `background-image: url('${kuva2}')`;
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
        tulokset.appendChild(article);
        
        
    }
});




