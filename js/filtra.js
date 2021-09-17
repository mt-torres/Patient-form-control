const campoBusca = document.querySelector('#busca')

campoBusca.addEventListener('input', function(){
    const pacientes = document.querySelectorAll('.paciente')

    if(campoBusca.value != ''){
        for(i = 0; i < pacientes.length; i++){
            
            const nome = pacientes[i].querySelector('.info-nome')
            const expressao = new RegExp(campoBusca.value, 'i', )

            if(!expressao.test(nome.textContent)) {
                pacientes[i].classList.add('invisivel')
            }else{
                pacientes[i].classList.remove('invisivel')
            }
        }
    }else{
        for(i = 0; i < pacientes.length; i++){
            pacientes[i].classList.remove('invisivel')}
            
    }
    
})