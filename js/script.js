
let immagini = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];
let elementiimmagine = document.querySelector('.slider');
let contenutoimmagini = "";

for(let i=0; i < immagini.length; i++){
   let immaginecorrente= immagini[i] 
   contenutoimmagini +=
                     `<div class="slide">
                        <img src="${immaginecorrente}" />
                    </div>`;

}
elementiimmagine.innerHTML = contenutoimmagini;

let allslider = document.getElementsByClassName("slide")

let elementoattivo = 0;

allslider[elementoattivo]. classList.add("active");

let tastoAvanti = document.querySelector(".avanti")
let tastoindietro = document.querySelector(".indietro")

tastoindietro.addEventListener("click", function(){
    allslider[elementoattivo].classList.remove("active");
    elementoattivo++;
    allslider[elementoattivo].classList.add("active")
})

tastoAvanti.addEventListener("click", function(){
    allslider[elementoattivo].classList.remove("active");
    elementoattivo--;
    allslider[elementoattivo].classList.add("active")
})
