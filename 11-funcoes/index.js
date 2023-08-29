/*function incentivarQuester(){
    alert('muito bem,voce chegou ao js,continue assim!')
}
incentivarQuester()
*/
function soma(numero1,numero2){
    console.log(numero1 + numero2)
}
soma(1, 2)

function mais(numero4, numero5){
    return numero4 + numero5
}
let resultadoDaSoma = mais(1,3)
console.log(resultadoDaSoma)
resultadoDaSoma = mais(resultadoDaSoma , 10)
console.log(resultadoDaSoma)


function incentivarQueste(nomeQuester = 'Quester'){
    alert('muito bem ' + nomeQuester +  ', voce chegou ao js,continue assim!')
}
incentivarQueste('roberto')