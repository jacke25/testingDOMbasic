const title = document.querySelector('h1');//para seleccionar elementos

const p =  document.querySelector('p');

const parrafito = document.querySelector('.parrafito');

const pid = document.getElementById('pid');

const input = document.querySelector('input');

console.log(input.value);

console.log({
    title,
    p,
    parrafito,
    pid,
    input,
});
title.innerHTML = "Gracias <br> Totales";//nos permite modifical el HTML desde JS

title.innerText = "Felix Felicis";//Modifica unicamente texto

console.log(title.getAttribute("class"));//lee atributos
title.setAttribute("class", "Rojo");//modifica el valor del atributo


title.classList.add("Azul");//agrega una valor nuevo a la clase
title.classList.remove("Rojo");//elimina el valor "Rojo" de la clase


input.value = "Protego";//Modifica el atributo Value del input


const img = document.createElement("img");//crea un elemento HTML
img.setAttribute("src", "https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=400");
console.log(img);

pid.innerHTML = "";//reescribe el contenido de pid
pid.append(img);//append introduce img dentro de pid
