export default function CTec() {}

const icones = document.querySelectorAll(".iconecomptec");
// console.log(icones);

const descricoesCompTec = document.querySelectorAll(
  ".competencias-tecnicas-container article"
);

function mostrar(position) {
  descricoesCompTec.forEach((desc) => {
    desc.classList.replace("ativar", "desativar");
  });
  descricoesCompTec[position].classList.replace("desativar", "ativar");
}

icones.forEach((icone, posicaoDoicone) => {
  icone.addEventListener("click", () => {
    mostrar(posicaoDoicone);
  });
});
