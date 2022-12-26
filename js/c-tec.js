export default function CTec() {}

let icones = document.querySelectorAll(".iconecomptec");

console.log(icones);

let descricoesCompTec = document.querySelectorAll(
  ".competencias-tecnicas-container article"
);
console.log(descricoesCompTec);

function mostrar(position) {
  descricoesCompTec.forEach((desc) => {
    desc.classList.replace("ativar", "desativar");
  });
  descricoesCompTec[position].classList.replace("desativar", "ativar");
}

icones.forEach((icone, posicaoDoicone) => {
  icone.addEventListener("mouseover", () => {
    mostrar(posicaoDoicone);
  });
});
