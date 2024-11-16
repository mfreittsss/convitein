// script.js

// Alterar o texto do título ao clicar em "Sim, claro!"
document.getElementById("simButton").addEventListener("click", function() {
    document.getElementById("titulo").textContent = "Obrigada, me informe quando, e espero que logo"; // Altera o título
});

// Mover o botão "Não" quando clicado
document.getElementById("naoButton").addEventListener("click", function() {
    var naoButton = document.getElementById("naoButton");

    // Gerar uma posição aleatória para o botão dentro da tela
    var randomX = Math.random() * (window.innerWidth - naoButton.offsetWidth);
    var randomY = Math.random() * (window.innerHeight - naoButton.offsetHeight);

    // Movimentar o botão "Não" para a nova posição
    naoButton.style.position = 'absolute'; // Tornar o botão posicionado de forma absoluta
    naoButton.style.left = randomX + 'px'; // Novo valor de X (posição horizontal)
    naoButton.style.top = randomY + 'px'; // Novo valor de Y (posição vertical)
});
