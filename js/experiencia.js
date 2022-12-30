export default function initExperiencia() {}

let imagens = document.querySelectorAll("#experiencia li");
let experiencias = document.querySelectorAll(".aexperiencia");

// anima números
const numeros = document.querySelectorAll(".ano-experiencia");

function rodarNumero() {
  numeros.forEach((numero) => {
    const anoFinal = numero.innerHTML;
    let start = 1900;
    const timer = setInterval(() => {
      start++;
      numero.innerHTML = start;
      if (start >= anoFinal) clearInterval(timer);
    }, 0);
  });
}

// ativar
function ativar(index) {
  experiencias.forEach((experiencia) => {
    experiencia.classList.replace("ativo", "inativo");
  });
  experiencias[index].classList.replace("inativo", "ativo");
  rodarNumero();
}

imagens.forEach((imagem, posicaoDaImagem) => {
  imagem.addEventListener("click", () => {
    ativar(posicaoDaImagem);
  });
});
var doneYet = false;

window.addEventListener("scroll", (event) => {
  if (window.scrollY > 300 && !doneYet) {
    doneYet = true;
    rodarNumero();
  }
});
