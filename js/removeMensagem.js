function removeMensagem(classe,excluir){
    const PacienteAdicionado = document.querySelector(classe)
    setTimeout(()=>{
        PacienteAdicionado.classList.add('paciente-adicionado__efeito');
    },1000)
    setTimeout(()=>{
        excluir.remove()
    },3000)
}
