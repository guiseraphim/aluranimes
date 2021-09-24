var listaA = [];
function adicionarFilme() {
  var campoAnime = document.getElementById("filme").value;
  listarAnimes(campoAnime);
  document.getElementById("filme").value = "";
}
function listarAnimes(campoAnime) {
  var elementoAnime = "<img src=" + campoAnime + ">";
  var listaAnimes = document.getElementById("listaFilmes");
  listaA.push(elementoAnime);
  for (var i = 0; i < listaA.length; i++) {
    listaAnimes.innerHTML = listaA;
  }
}