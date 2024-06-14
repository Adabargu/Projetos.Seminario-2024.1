const numeroInput = document.getElementById('numero');
const advinharButton = document.getElementById('advinhar');
const mensagemElement = document.getElementById('mensagem');

advinharButton.addEventListener('click', () => {
    const numero = parseInt(numeroInput.value);

    if (numero > 6) {
        mensagemElement.textContent = 'Digite um número menor';
    } else if (numero < 6) {
        mensagemElement.textContent = 'Digite um número maior';
    } else {
        mensagemElement.textContent = 'Você acertou!';
    }
});