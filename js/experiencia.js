export default function initExperiencia() {}

let imagens = document.querySelectorAll("li");
let experiencias = document.querySelectorAll(".aexperiencia");

function ativar(index) {
  experiencias.forEach((experiencia) => {
    experiencia.classList.replace("ativo", "inativo");
  });
  experiencias[index].classList.replace("inativo", "ativo");
}

imagens.forEach((imagem, posicaoDaImagem) => {
  imagem.addEventListener("click", () => {
    ativar(posicaoDaImagem);
  });
});
