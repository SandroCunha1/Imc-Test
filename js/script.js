function getForm() {
    const form = document.getElementById('form-imc');
    const nome = document.getElementById('nome').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    
    let avaliacao = getAvaliacao(peso, altura, sexo);

    addToTable(nome, avaliacao.imc, avaliacao.msg);

    form.reset();

    return false;
}

function getAvaliacao(peso, altura, sexo) {
    let imc = peso / altura ** 2;
    let msg;
    if (sexo == "m" && imc < 19 || sexo == "f" && imc < 18) {
        msg = 'Abaixo do peso';
    } else if (sexo == "m" && imc < 25 || sexo == "f" && imc < 24) {
        msg = 'Peso normal';
    } else if (sexo == "m" && imc < 32 || sexo == "f" && imc < 29) {
        msg = 'Sobrepeso';
    } else {
        msg = 'Obesidade';
    }
    return {imc: imc, msg: msg};
}

function addToTable(nome, imc, avaliacao) {
    let tabela = document.getElementById('tabela-imc');
    tabela.removeAttribute("hidden")
    let newRow = tabela.insertRow();
    let nomeCell = newRow.insertCell(0);
    let imcCell = newRow.insertCell(1);
    let avaliacaoCell = newRow.insertCell(2);
    nomeCell.innerHTML = nome;
    imcCell.innerHTML = imc.toFixed(2);
    avaliacaoCell.innerHTML = avaliacao;
}







