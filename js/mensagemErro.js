const $listaErro =  document.querySelector('.erro');

function validaPaciente(){
    let erros = [];
    if(pacienteForm.nome.value == '')erros.push('Insira o nome do paciente');
    if(!validaPeso(pacienteForm.peso.value))erros.push('Peso inválido');
    if(pacienteForm.peso.value == '')erros.push('Insira o peso do paciente');
    if(!validaAltura(pacienteForm.altura.value))erros.push('Altura inválida');
    if(pacienteForm.altura.value == '')erros.push('Insira a altura do paciente');
    if(pacienteForm.gordura.value == '')erros.push('Insira a % de Gordura do paciente');
    return erros
}

function mensagemErro(array){
    $listaErro.innerHTML='';

    array.forEach(i => {
    const $erros = document.createElement('li')
    $erros.classList.add('paciente-invalido')
    $erros.textContent = i;
    $listaErro.appendChild($erros);
    })
}