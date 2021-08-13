document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

if (document.getElementById("nome").value != "" && 
document.getElementById("email") .value != "" &&
document.getElementById("telefone").value != "" ){   
  alert("Prontinho! você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome e email.")
}
}
 //nome da funcao
// se o valor do campo id NOME for diferente de *vazio* E o campo id EMAIL for diferente de vazio faz o envio dos dados
//se o campo de nome e email estiverem preenchidos 
// envie os dados
// se não
// peça a usuaria que preencha