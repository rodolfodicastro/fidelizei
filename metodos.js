function somarDoisMaisDois(){
var numeroUM = 2
var numeroDois = 2
var resultado = numeroUM + numeroDois
return resultado
}

function somar(num1,num2){
var resultado = num1 + num2
return resultado

}
somar()

function mostrarNoConsole(texto){
    var textoTransformado = texto.toUpperCase()
    console.log(textoTransformado)
}
function mostrarNoConsoleNormal(texto){
    console.log(texto)
}




function validarMaiorDeIdade(idade){
 
  if (idade>18 && idade<25){
     console.log("DE MAIOR, MAS TRABALHE")
 }
 else if (idade>18){
    console.log("DE MAIOR, MAS ESTUDE")
}

 else {
     console.log("ENSINO MEDIO")
 }
}

validarMaiorDeIdade(10)
validarMaiorDeIdade(20)
validarMaiorDeIdade(30)

function escreve10x(toalha){

    var contador = 1
    while(contador <= 10){
        console.log(toalha,contador)
        contador = contador +1
        }
}

escreve10x("Rockstar")


function escrever20x(quadro){
    for (
        var contador = 1; 
        contador <= 20;
        contador = contador +1
        ) {

console.log(quadro,contador)
        }

        

}

escrever20x ("Monalisa")

var idade = 10
console.log(idade)
idade = +idade
console.log(idade)