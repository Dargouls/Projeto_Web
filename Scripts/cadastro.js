
var nomeForm = document.getElementById("input-nome");
var emailForm = document.getElementById("input-email");
var senhaForm = document.getElementById("input-senha");

placeholders();

function validar(){
    
	var sexoForm = document.getElementById("input-sexo");
	var erro = document.getElementById("erro-preencher");

    if(nomeForm.value == "" || emailForm.value == "" || senhaForm.value == "" || sexoForm.value == "valor-padrao"){
		event.preventDefault();
		erro.innerHTML = "Preencha todos os campos";
		erro.style.color = "black";
		erro.style.backgroundColor = "#ff2f2f";
		erro.style.borderRadius = "2px";
        nomeForm.focus();
    } 
    
} 

function placeholders (){ //Mudar o conteúdo dos placeholders no HTML para dispositivos menores
	var larguraTela = screen.width;
	if (larguraTela <= "992"){
		nomeForm.placeholder = "Nome de usuário (4-12 caracteres)";

		emailForm.placeholder = "E-mail";

		senhaForm.placeholder = "Senha (6-12 caracteres)";
	}
}