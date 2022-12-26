export default function initExperiencia() {}

let imagens = document.querySelectorAll("li");
let experiencias = document.querySelectorAll(".aexperiencia");

// anima números
const numeros = document.querySelectorAll(".ano-experiencia");

numeros.forEach((numero) => {
  const anoFinal = numero.innerHTML;
  let start = 1900;
  const timer = setInterval(() => {
    start = start + 1;
    numero.innerHTML = start;
    if (start > anoFinal) clearInterval(timer);
  }, 0);
});

// ativar
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
