
placeholderEmail();

function placeholders (){
	var larguraTela = screen.width;
	if (larguraTela <= "992"){
		var placeholderNome = document.querySelector("#nome");
		placeholderNome.placeholder = "NOME";

		var placeholderEmail = document.querySelector("#email");
		placeholderEmail.placeholder = "EMAIL";

		var placeholderSenha = document.querySelector("#senha");
		placeholderSenha.placeholder = "SENHA";
	}
	
}
