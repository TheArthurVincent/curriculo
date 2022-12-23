export default function initCInter() {}
console.log("a");

const competenciaInter = document.querySelectorAll(
  ".competencia-interpessoal-titulo"
);

console.log(competenciaInter[1].nextElementSibling);

function mostrar(index) {
  competenciaInter[index].nextElementSibling.classList.replace(
    "inativo",
    "ativo"
  );
}

competenciaInter.forEach((competencia, posicao) => {
  competencia.addEventListener("click", mostrar(posicao));
});
