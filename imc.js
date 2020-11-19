// Rodar o cáculo de forma automárica
var tabelaDePacientes = document.querySelector('#tabela-pacientes');
var pacientes = tabelaDePacientes.getElementsByClassName('paciente');
var nPacientes = tabelaDePacientes.childElementCount;

var corFundoErro = 'red';
var corLetraErro = 'white';

for (var cont = 0; cont < nPacientes; cont++) {
    var pAlt = parseFloat(pacientes[cont].querySelector('.info-altura').textContent);
    var pPeso = parseFloat(pacientes[cont].querySelector('.info-peso').textContent);
    var tdImc = pacientes[cont].querySelector('.info-imc');

    if (verificaPeso(pPeso)) {
        tdImc.textContent = "Peso inválido.";
        pacientes[cont].style.backgroundColor = corFundoErro;
        pacientes[cont].style.color = corLetraErro;

    }
    if (verificaAlt(pAlt)) {
        tdImc.textContent = "Altura inválida.";
        pacientes[cont].style.backgroundColor = corFundoErro;
        pacientes[cont].style.color = corLetraErro;
    }

    if (tdImc.textContent !== "Altura inválida." && tdImc.textContent !== "Peso inválido.") {
        tdImc.textContent = calculoImc(pPeso, pAlt);
    }
}

function calculoImc (peso, altura) {
    return (peso/(altura*altura)).toFixed(2);
}

function verificaPeso (peso) {
    if (peso <= 0 || peso >= 500) {
        return true
    }
    else {
        return false
    }
}

function verificaAlt (alt) {
    if (alt <= 0 || alt >= 3) {
        return true
    }
    else {
        return false
    }
}
