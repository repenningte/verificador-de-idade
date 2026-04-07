function verificarIdade(){
    let idade = document.getElementById("idade").value;
    let resultado = document.getElementById("resultado");

    if (idade === "") {
        resultado.innerText = "Digite uma idade!";
    } else if (idade < 18) {
        resultado.innerText = "Você é menor de idade!";
    } else if (idade >= 18 && idade < 60) {
        resultado.innerText = "Você é adulto!";
    } else {
        resultado.innerText = "Você é idoso!";
    }
}