

//Variáveis
var header = '<header> <!--Barra superior-->'+ //Header padrão do site
'<div id="logo" class="fixo"><a id="link-logo" href="index.html"><img id="img-logo" src="Images/Logo do site.png" alt=""></a></div>'+
  '<nav id="navegacao-site" class="fixo"> <!--Botões de navegação-->'+
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
		'<a href="sobre.html"><span>Sobre</span></a>'+
		'<a href="generos.html"><span>Indicações de Livros</span></a>'+
		'<a href="escritores.html"><span>Hall dos escritores</span></a>'+
	  '</div>'+
	'</div>'+
	'<!--Monitores-->'+
	'<ul id="botoes-navegacao"> <!--Lista para organizar os botões-->'+
	  '<li class="navButton"><a href="index.html">Início</a></li>'+
	  '<li class="navButton" id="dropdown"> <!--Botão com dropdown-->'+
		'<a class="dropbtn">Livros ↓</a> <!--Texto do botão-->'+
		'<div class="dropdownContent"> <!--Conteúdo do dropdown-->'+
		  '<a href="generos.html">Indicações de livros</a>'+
		  '<a href="escritores.html">Hall dos Escritores</a>'+
		'</div>'+
	  '</li>'+
	  '<li class="navButton"><a href="sobre.html">Sobre</a></li>'+
	'</ul>'+
  '</nav>'+
  '<!--nav dos botões de entrar ou criar conta no site-->'+
  '<nav id="gerenciar-conta" class="fixo">'+
	'<ul id="ul-gerenciar-conta">'+
		'<li id="li-conta">'+
		'<div id="conta"></div>'+
		'</li>'+
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

var footer ='<footer>'+
	'<ul> <!--Adicionar botão do github para dispositivos menores-->'+
		'<li><span>© EbookReader 2020</span></li>'+
		'<li id="email"><span>SAC: SuporteAL@hotmail.com</span></li>'+
		'<li id="link-github"><a  class="link" target="_blank" href="https://github.com/JosivaldoGabriel/Projeto_Web">'+
	'Link para o repositório no Github</a></li>'+
		'<li id="follow-github">'+
		'<a target="_blank" href="https://github.com/JosivaldoGabriel/Projeto_Web">'+
		'<button id="btn-github"><img id="img-github" src="Images/github-follow-button.png">'+
		'<span>Github</span></button></a></li>'+
	'</ul>'+
'</footer>';
document.body.innerHTML += footer;

const logoSite = document.querySelector("#img-logo");
var dropdownAtivo = false;
const tituloPagina = document.querySelector("title").innerText;
var header = document.querySelector("header");

//Carregamento da página
if (tituloPagina == "EbookReader") {
	console.log("Lorem ipsum");
} else {
	document.querySelector("title").innerText += " - EbookReader";
}
window.addEventListener("scroll", function(){
	if (window.scrollY > 100){
		header.style = "transform: scale(1.05, 1.05);"
		header.style.opacity = "0";
	} else{
		header.style = "transform: scale(1, 1);"
		header.style.opacity = "1";
	}
})

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