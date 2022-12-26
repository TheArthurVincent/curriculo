export default function CTec() {}

let icones = document.querySelectorAll(".iconecomptec");

let descricoesCompTec = document.querySelectorAll(
  ".competencias-tecnicas-container article"
);

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
