
const main = document.getElementById("main");
const letra = document.getElementById("letra");
const mostrarLivro = document.getElementById("mostrar-livro");
const html = document.getElementsByTagName("html")[0];
const fundoEscuro = document.querySelector(".fundo-escuro");
ordenar(); //Iniciar a página já com todos os livros em ordem alfabética

function mostrarLetra(a) {
  let id = a.getAttribute("id");
  letra.innerHTML = id;
}

function mostrarInformacoesLivro() {
  mostrarLivro.classList.toggle("mostrar");
  html.style.overflowY = "hidden";
  escurecerTela();
}
function escurecerTela() { //Escurecer o fundo para dar destaque a div q mostra o livro
  fundoEscuro.style.display = "initial";
}
function clarearTela() { //Volta o brilho da tela ao normal
  fundoEscuro.style.display = "none";
  //document.getElementById("trecho-iframe").style.visibility = "hidden";
  mostrarLivro.classList.toggle("mostrar");
  html.style.overflowY = "overlay";
}
//Junta a função de criar a divisão e a de colocar cada livro em uma divisão
function ordenar() {
  var listaTitulosLivros = document.querySelectorAll(".titulo");
  //var listaTitulosLivros = [].slice.call(titulosLivros, 0);

//A função pega a lista e para cada livro, será criada uma divisória por ordem alfabética
//(n serão criadas divisórias iguais).
  criarCategorias(listaTitulosLivros);
//cada livro será organizado em uma divisória.
  categorizar(listaTitulosLivros);
}

//Função que diz em qual divisão o livro vai ficar, em ordem alfabética
function categorizar(listaTitulosLivros) {
  var categoriasCriadas = document.querySelectorAll(".livrosOrdenadosDIV");

  //Para cada divisão criada, o código procurará por livros que entrem na divisão
  for (let i = 0; i < categoriasCriadas.length; i++) {
    const categoria = categoriasCriadas[i];
    const primeiraLetraCategoria = categoriasCriadas[i].getAttribute("id")[0].toUpperCase(); //Em letra maiúscula
    for (let i = 0; i < listaTitulosLivros.length; i++) {
      const primeiraLetraLivro = listaTitulosLivros[i].innerText[0].toUpperCase();
      if (primeiraLetraLivro == primeiraLetraCategoria) { //Se as iniciais do livro e da categoria batem, 
        console.log("Adicionado a uma categoria existente");//então eles são da mesma letra para organizar em
        var livro = listaTitulosLivros[i].closest(".livro");//ordem alfabética
        categoria.appendChild(livro);        
      } else{
        console.log("Não adicionado");
      }
    }    
  }
}

//Função que cria dinamicamente uma divisão para cada livro (não criará uma divisão igual a alguma q já tenha)
function criarCategorias(listaTitulosLivros) { 
  listaTitulosLivros.forEach(i => {
    const primeiraLetraLivro = i.innerText[0].toUpperCase();
    const categoriaIgual = document.querySelector("#"+primeiraLetraLivro+"-letra");
    if (categoriaIgual == null){
      var categoriaNova = document.createElement("div");
      categoriaNova.setAttribute("class", "livrosOrdenadosDIV");
      categoriaNova.setAttribute("id", primeiraLetraLivro+"-letra");
      var nomeCategoria = document.createElement("p");
      nomeCategoria.setAttribute("class", "livrosOrdenados");
      nomeCategoria.innerText = "# "+primeiraLetraLivro;
      main.append(categoriaNova);
      categoriaNova.append(nomeCategoria);
    } else{ //Se já existe uma divisão para o livro, não será criada outra.
      console.log("Já tem");
    }
    
  });
}