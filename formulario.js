// Adicionar à tabela com o botão
var botao = document.querySelector('#adicionar-paciente');
var formu = document.querySelector('#formulario');

botao.addEventListener('click', function(event){
    event.preventDefault();

    // Recebe os valores do formulário
    var paciente = {
        nome: formu.nome.value,
        peso: formu.peso.value,
        altura: formu.altura.value,
        gordura: formu.gordura.value
    }

    // Verifica os valores
    var erros = verificaFormu (paciente);
    if (erros.length !==0) {
        mensagemDeErro (erros);
    }
    else {
        // limpa os erros
        var ul = document.querySelector('#mensagem-de-erro');
        ul.innerHTML = '';

        // Cria os Elementos e Vincula eles
        adicionarNaTabela (paciente);

        // Limpa o formulários
        formu.reset();
    }
})

function adicionarNaTabela (pacienteobj) {
    var pacienteTr = montarNovaLista (pacienteobj);
    var tabelaDePacientes = document.querySelector('#tabela-pacientes');
    tabelaDePacientes.appendChild(pacienteTr);
}

function montarNovaLista (paciente) {
    var tr = document.createElement('tr');
    tr.classList.add('paciente');

    var nomeTd = criarNovoItem (paciente.nome, 'info-nome');
    var pesoTd = criarNovoItem (paciente.peso, 'info-peso');
    var altTd =criarNovoItem (paciente.altura, 'info-altura');
    var gordTd =criarNovoItem (paciente.gordura, 'info-gordura');
    var imcTd =criarNovoItem (calculoImc(paciente.peso, paciente.altura), 'info-imc');

    tr.appendChild(nomeTd);
    tr.appendChild(pesoTd);
    tr.appendChild(altTd);
    tr.appendChild(gordTd);
    tr.appendChild(imcTd);

    return tr;
}

function criarNovoItem(item, classe) {
    //Cria os elementos
    var td = document.createElement('td');

    // ADiciona as classes aos elementos criados
    td.classList.add(classe);

    // Determina os valores dos novos elementos
    td.textContent = item;

    return td;
}

function verificaFormu (paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push('Nome em branco.');
    }

    if (paciente.altura.length == 0) {
        erros.push('Altura em branco.');
    }
    else if (verificaAlt (paciente.altura)) {
        erros.push('Altura inválida.');
    }

    if (paciente.peso.length == 0) {
        erros.push('Peso em branco.');
    }
    else if (verificaPeso (paciente.peso)) {
        erros.push('Peso inválido.');

    }

    if (paciente.gordura.length == 0) {
        erros.push('Gordura em branco.');
    }

    return erros;
}

function mensagemDeErro(xerro) {
    var lista = document.querySelector('#mensagem-de-erro');
    // limpa os erros anteriores e dps dá as mensagens na pagina
    lista.innerHTML = '';

    xerro.forEach(function(erro){
    var itemDaLista = document.createElement('li');
    itemDaLista.textContent = erro;

    lista.appendChild(itemDaLista);
    });
}
