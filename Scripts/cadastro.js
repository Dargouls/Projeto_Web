
var nomeForm = document.getElementById("input-nome");
var emailForm = document.getElementById("input-email");
var senhaForm = document.getElementById("input-senha");
var animacaoCirculo = false;
placeholders();

function validar(){
	var sexoForm = document.getElementById("input-sexo");
	var erro = document.getElementById("erro-preencher");

    if(nomeForm.value == "" || emailForm.value == "" || senhaForm.value == "" || sexoForm.value == "valor-padrao"){
		event.preventDefault();
		let camposVazios = [nomeForm, emailForm, senhaForm];
		for (i=0; i < camposVazios.length; i++){
			if (camposVazios[i].value == "") {
				camposVazios[i].style.borderColor = "#ff7777";
			} else {
				camposVazios[i].style.borderColor = "#7eceef";
			}
		}
		erro.innerHTML = "Preencha todos os campos";
		erro.style = 'color: black; background-color: #ff2f2f; border-radius: 2px';
        nomeForm.focus();
    } else {
		alert("Conta criada com sucesso!")
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