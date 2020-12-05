
var logoSite = document.querySelector("#img-logo");
var dropdownAtivo = false;

placeholders();

function validar(){
    var nomeForm = document.getElementById("input-nome");
    var emailForm = document.getElementById("input-email");
	var senhaForm = document.getElementById("input-senha");
	var sexoForm = document.getElementById("input-sexo")
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
		var placeholderNome = document.querySelector("nome");
		placeholderNome.placeholder = "Nome de usuário (4-12 caracteres)";

		var placeholderEmail = document.querySelector("email");
		placeholderEmail.placeholder = "E-mail";

		var placeholderSenha = document.querySelector("senha");
		placeholderSenha.placeholder = "Senha (6-12 caracteres)";
	}
}

function dropbtn(){
	var button = document.querySelector("#hamburguer-button");
	var content = document.querySelector(".dropdownContent");
	var dropdown = document.querySelector("#dropdown-mobile");
	if (dropdownAtivo){
		dropdownAtivo = false;
		dropdown.style.width = "50px";
		content.style.display = "none";
		logoSite.style.display = "block";
		logoSite.style.opacity = "1";
	} else{
		dropdownAtivo = true;
		dropdown.style.width = "100%";
		content.style.display = "block";
		logoSite.style.opacity = "0";
		setTimeout(logoDisplay, 170);
	}
	
	button.addEventListener("blur", function() {
		dropdown.style.width = "50px";
		content.style.display = "none";
		logoSite.style.display = "block";
		logoSite.style.opacity = "1";
	});
	
}
function logoDisplay(){
	logoSite.style.display = "none";
}