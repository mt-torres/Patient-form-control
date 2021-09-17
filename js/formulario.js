let pacienteForm = {
    nome : document.querySelector('#nome'),
    peso : document.querySelector('#peso'),
    altura : document.querySelector('#altura'),
    gordura : document.querySelector('#gordura')
}

let botaoForm = document.querySelector('#adicionar-paciente');
let form = document.querySelector('#form-adiciona');

function inserePacientes(paciente) {
    let elementoTbody = document.querySelector("#tabela-pacientes");
    let tr = document.createElement('tr');
    tr.insertAdjacentHTML('beforeend',`${   `
    <td class="info-nome">${paciente != pacienteForm? paciente.nome : paciente.nome.value}</td>
    <td class="info-peso">${paciente != pacienteForm? paciente.peso : paciente.peso.value}</td>
    <td class="info-altura">${paciente != pacienteForm? paciente.altura : paciente.altura.value}</td>
    <td class="info-gordura">${paciente != pacienteForm? paciente.gordura : paciente.gordura.value}</td>
    <td class="info-imc">${paciente != pacienteForm? calculaIMC(paciente.peso ,paciente.altura) :calculaIMC(paciente.peso.value ,paciente.altura.value)}</td>
    `}`);
    tr.classList.add('paciente');
  
    elementoTbody.appendChild(tr);
}

botaoForm.addEventListener('click', function (evento) {
    evento.preventDefault();


    let erros = validaPaciente()

    if(erros.length > 0 ){
        mensagemErro(erros);
        return;

    }else{
        $listaErro.innerHTML='';

        const $erros = document.createElement('li')
        $erros.classList.add('paciente-adicionado')
        $erros.textContent = 'Paciente adicionado com sucesso!';
        $listaErro.appendChild($erros);
        inserePacientes(pacienteForm)
        pacienteForm.nome.focus();
        removeMensagem('.paciente-adicionado', $erros);
        
    }
    
    form.reset();
})

