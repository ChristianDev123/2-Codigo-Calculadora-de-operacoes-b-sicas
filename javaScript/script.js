var numero1 = parseFloat(prompt("Qual o valor do primeiro fator da equação? "));
var operação = prompt("Qual a operação você deseja executar?\n(+) Adição, (-) Subtração, (*) Multiplicação, (/) Divisão");
var numero2 = parseFloat(prompt("Qual o valor do segundo fator da equação?"))
var tela = document.querySelector("h2#tela")
 if(operação == "+"){
   var soma = numero1 + numero2;
   tela.innerHTML = numero1 + " + " + numero2 + " = " + soma 
 }else if(operação == "-"){
   var subtração = numero1 - numero2;
   tela.innerHTML = numero1 + " - " + numero2 + " = " + subtração
 }else if(operação == "*"){
   var multiplicação = numero1 * numero2
   tela.innerHTML = numero1 + " * " + numero2 + " = " + multiplicação
 }else if(operação == "/"){
   var divisão = numero1 / numero2
   tela.innerHTML = numero1 + " / " + numero2 + " = " + divisão
 }