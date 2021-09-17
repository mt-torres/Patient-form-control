const tabela = document.querySelector('#tabela-pacientes')

tabela.addEventListener('dblclick', (event) =>{
    const alvo = event.target;
    const deletar = alvo.closest('.paciente');
    deletar.classList.add('fadeOut');
    setTimeout(()=>{
        deletar.remove();
    },500)
})