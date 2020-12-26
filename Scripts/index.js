
const body = document.getElementsByTagName("body")[0];
const arquivoSelecionado = document.getElementById("mostrar-arquivo");
const botoesArquivoDIV = document.getElementById("botoes-selecionar-arquivo");
const lerPDF = document.getElementById("lerPDF");
var arquivo = document.getElementById("selecionar-arquivo");
var nome = "Nenhum arquivo selecionado";
var mostrandoArquivo = false;

lerPDF.addEventListener("click", function(){
  arquivo.click();
  //mostrarArquivo();
})
arquivoSelecionado.addEventListener("click", function(){
  lerArquivo();
})
arquivo.addEventListener("change", function(e){
  if (arquivo.files.length > 0){
    nome = arquivo.files[0].name;
    mostrarArquivo();
  }
})

function mostrarArquivo(){
  lerPDF.style = "border-top-right-radius: 0; border-bottom-right-radius: 0; border-right: none;";
  arquivoSelecionado.style = 'width: 400px';
  arquivoSelecionado.removeAttribute("disabled");
  arquivoSelecionado.innerHTML = "<p>"+nome+"</p>";
}
function esconderArquivo(){
  arquivoSelecionado.style.width = '0px';
  arquivoSelecionado.setAttribute("disabled");
}
function lerArquivo(){
  botoesArquivoDIV.style = "transform: scale(1.2);"
  arquivoSelecionado.style = " width: 400px; transform: scale(1.1) translateX(-140px); box-shadow: 0px 0px 250px 300px rgba(0, 0, 0, 0.7);"
  lerPDF.style = "transform: translateX(200px);"
}