const botao = document.querySelector('#carregar-paciente')

botao.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')
    xhr.send()
    xhr.addEventListener('load', function(){
        if(xhr.status == 200){
            const listaPacientesServidor = JSON.parse(xhr.responseText);
            listaPacientesServidor.forEach(i => {
                inserePacientes(i);          

            });
            const mensagemStatus = document.createElement('span');
            mensagemStatus.classList.add('mensagem-carregado','paciente-adicionado');
            mensagemStatus.textContent = 'Dados carregados com sucesso!';
            const elementoPai = document.querySelector('.span-mensagem');
            elementoPai.appendChild(mensagemStatus);
            removeMensagem('.paciente-adicionado', mensagemStatus);

        }else{

            const mensagemStatus = document.createElement('span');
            mensagemStatus.classList.add('mensagem-carregado','paciente-invalido');
            mensagemStatus.textContent = 'Erro ao carregar os dados.';
            const elementoPai = document.querySelector('.span-mensagem');
            elementoPai.appendChild(mensagemStatus);
            removeMensagem('.paciente-invalido',mensagemStatus);

        }

    })

})