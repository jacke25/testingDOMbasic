const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");

const pResult = document.querySelector("#pResult");

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
    const unionInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + unionInputs;
}