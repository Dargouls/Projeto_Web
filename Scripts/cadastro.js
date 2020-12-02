
placeholders();

function placeholders (){
	var larguraTela = screen.width;
	if (larguraTela <= "992"){
		var placeholderNome = document.querySelector("#input-nome");
		placeholderNome.placeholder = "Nome de usuário (4-12 caracteres)";

		var placeholderEmail = document.querySelector("#input-email");
		placeholderEmail.placeholder = "E-mail";

		var placeholderSenha = document.querySelector("#input-senha");
		placeholderSenha.placeholder = "Senha";
	}
	
}
