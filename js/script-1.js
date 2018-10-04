//buscando valor da nota um do primeiro aluno pelo id

const aluno = document.querySelector("#primeiro-da-lista");

const tdPrimeiraNota = aluno.querySelector(".info-notaum");
const primeiraNota = tdPrimeiraNota.textContent;
//console.log(primeiraNota);

//buscando o segundo valor
const tdSegundaNota = aluno.querySelector(".info-notadois");
const segundaNota = tdSegundaNota.textContent;

//fazendo a media e printando ela
const mediaFinal = aluno.querySelector(".info-media");
const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;
mediaFinal.textContent = mediaCalculada;

const aluno2 = document.querySelector("#segundo-da-lista")



