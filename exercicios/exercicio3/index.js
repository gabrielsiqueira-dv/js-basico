/*
    meu exercicio
const retornoDoUsuario = prompt("Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem? sim ou nao")
 
if(retornoDoUsuario == "sim" ){
   alert("Ótimo! Nós temos as melhores camas de toda a região!")
}
else if(retornoDoUsuario == "nao"){
    alert("Que pena! Você parecia ser uma pessoa mais legal")
}else{
    alert("recarrege a pagina")
}
*/
/* exercicio do curso */
const retornoDoUsuario = confirm("Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?")
 
if(retornoDoUsuario){
   alert("Ótimo! Nós temos as melhores camas de toda a região!")
}
else{
    alert("Que pena! Você parecia ser uma pessoa mais legal")
}