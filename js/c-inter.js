export default function initCInter() {}
console.log("a");

const competenciaInter = document.querySelectorAll(
  ".competencia-interpessoal-titulo"
);
function mostrarResposta() {
  console.log(this.nextElementSibling.classList.toggle("ativo"));
  console.log(this.nextElementSibling.classList.toggle("inativo"));
}

competenciaInter.forEach((pergunta) => {
  pergunta.addEventListener("click", mostrarResposta);
});
