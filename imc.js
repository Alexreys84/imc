function calcularIMC() {
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(idade) || isNaN(peso) || isNaN(altura)) {
        alert('Por favor, insira valores válidos para idade, peso e altura.');
        return;
    }

    const imc = peso / (altura ** 2);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'Obesidade grau I';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
    }

    const resultado = `Idade: ${idade} anos\nIMC: ${imc.toFixed(2)} - ${classificacao}`;
    document.getElementById('resultado').textContent = resultado;
}

function limparCampos() {
    document.getElementById('idade').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').textContent = '';
}
