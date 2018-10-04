const todosOsAlunos = document.querySelectorAll(".aluno");

for (let indice = 0; indice < todosOsAlunos.lenght; indice++){

    const aluno = todosOsAlunos[indice];

    const tdPrimeiraNota = aluno.querySelector(".info-notaum");
    const primeiraNota = tdPrimeiraNota.textContent;

    const tdSegundaNota = aluno.querySelector(".info-notadois");
    const segundaNota = tdSegundaNota.textContent;

    const mediaFinal = aluno.querySelector(".info-media");
    const mediaCalculada = (parseFloat(primeiraNota) + parseFloat(segundaNota)) / 2;

    mediaFinal.textContent = mediaCalculada.toFixed(2);
}