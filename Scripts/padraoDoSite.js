

//Variáveis
var header = '<header> <!--Barra superior-->'+ //Header padrão do site
'<a id="link-logo" href="index.html"><img id="img-logo" src="Images/Logo do site.png" alt=""></a>'+
  '<nav id="navegacao-site"> <!--Botões de navegação-->'+
	'<!--Celulares em modo retrato-->'+
	'<div id="dropdown-mobile"> <!--Botão com dropdown-->'+
	  '<button type="button" onclick="dropbtn()" class="dropbtn" id="hamburguer-button"> <!--Botão feito sem imagem, apenas CSS-->'+
		'<div class="bar1"></div>'+
		'<div class="bar2"></div>'+
		'<div class="bar3"></div>'+
	  '</button>'+
	  '<div class="dropdownContent"> <!--Conteúdo do dropdown-->'+
		'<a href="index.html"><span>Início</span></a>'+
		'<a href="cadastro.html#formulario-cadastro"><span>Criar conta</span></a>'+
		'<a href="leitura.html"><span>PDF (retirar)</span></a>'+
		'<a href="sobre.html"><span>Sobre</span></a>'+
		'<a href="generos.html"><span>Indicações de Livros</span></a>'+
		'<a href="escritores.html"><span>Hall dos escritores</span></a>'+
	  '</div>'+
	'</div>'+
	'<!--Monitores-->'+
	'<ul id="botoes-navegacao"> <!--Lista para organizar os botões-->'+
	  '<li class="navButton"><a href="index.html">Início</a></li>'+
	  '<li class="navButton"><a href="leitura.html">PDF (retirar)</a></li> <!--Esse botão está sendo mostrado apenas a fim de ver todas as páginas do site. Será retirado no momento q houver JS-->'+
	  '<li class="navButton"><a href="sobre.html">Sobre</a></li>'+
	  '<li class="navButton" id="dropdown"> <!--Botão com dropdown-->'+
		'<a class="dropbtn">Livros ↓</a> <!--Texto do botão-->'+
		'<div class="dropdownContent"> <!--Conteúdo do dropdown-->'+
		  '<a href="generos.html">Indicações de livros</a>'+
		  '<a href="escritores.html">Hall dos Escritores</a>'+
		'</div>'+
	  '</li>'+
	'</ul>'+
  '</nav>'+
  '<!--nav dos botões de entrar ou criar conta no site-->'+
  '<nav id="gerenciar-conta">'+
	'<ul id="ul-gerenciar-conta">'+
	  '<li>'+
		'<a class="botoesLogin" id="login" href="entrar.html#formulario-entrar"><span>Entrar</span></a>'+
	  '</li>'+
	  '<li>'+
		'<a class="botoesLogin" id="cadastro" href="cadastro.html#formulario-cadastro"><span>Criar conta</span></a>'+
	  '</li>'+
	'</ul>'+
  '</nav>'+
'</header>';
document.body.innerHTML = header;

var logoSite = document.querySelector("#img-logo");
var dropdownAtivo = false;
var tituloPagina = document.querySelector("title").innerText;

//Carregamento da página
if (tituloPagina == "EbookReader") {
	console.log("Lorem ipsum");
} else {
	document.querySelector("title").innerText += " - EbookReader";
}

//Funções
function dropbtn(){
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
}
function logoDisplay(){
	logoSite.style.display = "none";
}