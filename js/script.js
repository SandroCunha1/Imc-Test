function getForm(){
    pessoa ={
        nome : document.getElementById("nome").value,
        peso : document.getElementById("peso").value,
        altura : document.getElementById("altura").value,
        genero : document.querySelector('input[name="sexo"]:checked').value
    }
    console.log(pessoa)
    return false;
}

function calcImc(peso, altura){
    imc = peso / altura ** 2;
    
}