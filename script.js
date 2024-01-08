/*function calcular(){
    let n1 = eval(document.calculo.numero1.value);
    let n2 = eval(document.calculo.numero2.value);
    let resultado = document.querySelector("#resultado");
    
    let soma = n1 + n2;

    resultado.innerHTML += soma;

}*/
const soma = document.querySelector("#btn-somar");
const subtracao = document.querySelector("#btn-subtrair");
const multiplicacao = document.querySelector("#btn-multiplicar");
const divisao = document.querySelector("#btn-dividir");
const limpar = document.querySelector("#btn-limpar");
const numero1 = document.querySelector("#numero1");
//Adicionar um listener
soma.addEventListener("click", ()=>{
    let n1 = eval(document.calculo.numero1.value);
    let n2 = eval(document.calculo.numero2.value);
    let resultado = document.querySelector("#resultado");
    
    let soma = n1 + n2;

    resultado.innerHTML += soma;

});

subtracao.addEventListener("click", ()=>{
    let n1 = eval(document.calculo.numero1.value);
    let n2 = eval(document.calculo.numero2.value);
    let resultado = document.querySelector("#resultado");
    
    let subtracao = n1 - n2;

    resultado.innerHTML += subtracao;

});

multiplicacao.addEventListener("click", ()=>{
    let n1 = eval(document.calculo.numero1.value);
    let n2 = eval(document.calculo.numero2.value);
    let resultado = document.querySelector("#resultado");
    
    let subtracao = n1 * n2;

    resultado.innerHTML += subtracao;

});

divisao.addEventListener("click", ()=>{
    let n1 = eval(document.calculo.numero1.value);
    let n2 = eval(document.calculo.numero2.value);
    let resultado = document.querySelector("#resultado");
    
    let subtracao = n1 / n2;

    resultado.innerHTML += subtracao;

});

limpar.addEventListener("click", () =>{
    resultado.innerHTML = "";
    resultado.innerHTML = "";
})

numero1.addEventListener("mouseover", () =>{
    numero1.placeholder = "Digite um número";
    numero1.style.backgroundColor = "#a3b18a";
})

numero1.addEventListener("mouseout", () =>{
    numero1.placeholder = "";
    numero1.style.backgroundColor = "#fff";
})

numero2.addEventListener("mouseover", () =>{
    numero2.placeholder = "Digite um número";
    numero2.style.backgroundColor = "#a3b18a";
})

numero2.addEventListener("mouseout", () =>{
    numero2.placeholder = "";
    numero2.style.backgroundColor = "#fff";
})