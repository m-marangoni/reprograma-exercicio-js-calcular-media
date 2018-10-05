const AdicionarAluno = document.querySelector("#adicionar-aluno");
AdicionarAluno.addEventListener("click", function(event){
 event.preventDefault();
const formularioAluno = document.querySelector("#form-adiciona");
const novoAluno = obterDadosFormulario(formularioAluno);


const alunoTr = document.createElement("tr");
const nomeAlunoTd = document.createElement("td");
const notaUmAlunoTd = document.createElement("td");
const notaDoisAlunoTd = document.createElement("td");
const mediaAlunoTd = document.createElement("td");

nomeAlunoTd.textContent = novoAluno.nomeAluno;
notaUmAlunoTd.textContent = novoAluno.notaUmAluno;
notaDoisAlunoTd.textContent = novoAluno.notaDoisAluno;
mediaAlunoTd.textContent = novoAluno.media;


alunoTr.appendChild(nomeAlunoTd);
alunoTr.appendChild(notaUmAlunoTd);
alunoTr.appendChild(notaDoisAlunoTd);
alunoTr.appendChild(mediaAlunoTd);

const tabela = document.querySelector("#tabela-alunos");
tabela.appendChild(alunoTr);

});

function obterDadosFormulario(formulario){
  const objetoAluno = {
    nomeAluno = formulario.nome.value
    ,notaUmAluno = formulario.notaum.value
    ,notaDoisAluno =  formulario.notadois.value
    ,media = (formulario.notaum.value, formulario.notadois.value)
  }

  return objetoAluno;

}