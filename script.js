//Seleciona o botão e o parágrafo onde a mensagem irá aparecer
const botao = document.getElementById('botao');
const mensagemPara = document.getElementById('mensagem');

//Adiciona o clique do botão
botao.addEventListener('click', function() {
    //Mensagem que irá aparecer
     const mensagem = "Seja muito bem vindo(a)!";

     //Conteúdo do parágrafo com a mensagem
    mensagemPara.textContent = mensagem;
});