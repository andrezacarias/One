var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();// Previne o comportamento default de enviar e apagar
    
    //Adicionando dinamicamente um paciente no formulário
    var form = document.querySelector("#form-adiciona");

    //Extrai as funções do FORM
    var paciente = obtemPacienteDoFormulario(form);

    // Cria os elementos "tr" e "td"
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    //Validação dos atributos do paciente
    if (!validaPaciente(paciente)) {
        alert("Paciente inválido" + paciente.nome);
        return;
    }

    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    adicionaPacienteNaTabela(paciente);

    form.reset();
    
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemPacienteDoFormulario(form){

    var paciente ={
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

//Função para gravar na tabela
function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//Função chamada por outra função que grava a tabela
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}