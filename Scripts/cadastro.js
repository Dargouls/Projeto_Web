
const nomeForm = document.getElementById("input-nome");
const emailForm = document.getElementById("input-email");
const senhaForm = document.getElementById("input-senha");
const btnNaoAceitarTermos = document.getElementById("btn-nao-aceitar-termos");
const btnAceitarTermos = document.getElementById("btn-aceitar-termos");
const btnSubmit = document.getElementById("btn-criar-conta");
const divSubmit = document.getElementById("criar-conta");
var termos = false;

placeholders();

function validar(){
	var btnSubmit = document.getElementById("btn-criar-conta");
	var sexoForm = document.getElementById("input-sexo");
	var erro = document.getElementById("erro-preencher");

    if(nomeForm.value == "" || emailForm.value == "" || senhaForm.value == ""){
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
		if (termos) {
			alert("Conta criada com sucesso!");
		} else{
			divSubmit.style.display = "none";
			btnSubmit.setAttribute("data-toggle", "modal");
		}
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

function aceitarTermos() {
	//Quando o usuário aceitar os termos e condições, o botão poderá enviar o formulário
	termos = true;
	btnSubmit.setAttribute("type", "submit");
	btnSubmit.value = "Criar a conta";
	divSubmit.style.display = "block";
}
function naoAceitarTermos() {
	termos = false;
	divSubmit.style.display = "block";
}