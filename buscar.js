var botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener ('click', function (event) {
    var xhr = new XMLHttpRequest ();

    xhr.open('GET', "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erro = document.querySelector('#erro-busca');
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var novosPacientes = JSON.parse(resposta);

            erro.classList.add('invisivel');

            for (i = 0; i < novosPacientes.length; i++) {
                adicionarNaTabela (novosPacientes[i])
            }
        }
        else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.classList.remove('invisivel');
        }
    });

    xhr.send();
})
