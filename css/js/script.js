document.getElementById("botaoEnviar").addEventListener("click", validaFormulario )

function validaFormulario(event){
    event.preventDefault();
  
   if (document.getElementById("nome").value != "" && 
       document.getElementById("email").value != "" &&
       document.getElementById("telefone").value != ""){

    alert("Prontinho! Você receberá as novidades por e-mail!")
  }else{
    alert("Preencha os campos nome e email!")
 } 
}