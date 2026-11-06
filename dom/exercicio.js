//Crie dois campos (Nome e E-mail) e um botão. Ao clicar, mostre no Console os dois valores. Pegue um campo por id e o outro por classe (use métodos diferentes).

// const nome = document.getElementById("nome");
// const email = document.querySelector(".campo-email");

// document.getElementById("btn-ler").addEventListener("click", function () {
//     console.log("Nome:", nome.value);
//     console.log("Email:", email.value);
// });

//Crie 5 <div class="bloco">. Percorra todos e pinte cada um de uma cor diferente.

// const blocos = document.querySelectorAll(".bloco");
// const cores = ["tomato", "orange", "gold", "green", "red"]

// blocos.forEach((bloco, i) => {
//     bloco.style.backgroundColor = cores[i];
//     bloco.textContent = "bloco " + (i + 1)
// });


// //Um botão que mostra quantas vezes foi clicado: "Cliques: 0", "Cliques: 1"...

// const botao = document.getElementById("contador");

// let cliques = 0;

// botao.addEventListener("click", function () {
//     cliques++
//     botao.textContent = "cliques: " + cliques;
// })

// Em uma <table id="tabela-dados"> vazia, crie via JavaScript uma linha <tr> com duas células <td> ("Nome" e "Idade") e coloque tudo na tabela.

// const tebela = document.getElementById("tabela-dados");

// const linha = document.createElement("tr");

// const celulaNome = document.createElement("td");
// const celulaIdade = document.createElement("td");

// celulaNome.textcontent = "Nome";
// celulaIdade.textcontent = "Idade";

// linha.appendChild(celulaNome);
// linha.appendChild(celulaIdade);

// tabela.appendChild(linha);

// Botão "Mostrar/Esconder" que alterna a visibilidade de um parágrafo usando classList.toggle.

// const botao = document.getElementById("btn-toggle");
// const texto = document.getElementById("segredo");

// botao.addEventListener("click", function () {
//     texto.classList.toggle("oculto");
// });






// Um botão que alterna o tema da página entre claro e escuro usando uma classe no body. O texto do botão também deve mudar ("Modo escuro" / "Modo claro").

const botao = document.getElementById('btn-tema');

botao.addEventListener('click', function () {
  document.body.classList.toggle("escuro");
  
  const escuro = document.body.classList.contains("escuro");
  
  botao.textContent = escuro ? "Modo claro" : "Modo escuro";
});


