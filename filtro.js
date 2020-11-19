var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function (){
    var nomeFiltro = this.value;
    var pacientes = document.querySelectorAll('.paciente');

    for (var i = 0; i < pacientes.length; i++) {
        tdNome = pacientes[i].querySelector('.info-nome');
        nome = tdNome.textContent;
        var expressao = new RegExp(nomeFiltro,'i');

        if (nomeFiltro == "")
        {
            pacientes[i].classList.remove('invisivel');
        }
        else {
            if (!expressao.test(nome)) {
                pacientes[i].classList.add('invisivel');
            }
            else {
                pacientes[i].classList.remove('invisivel');
            }
        }
    }
})
