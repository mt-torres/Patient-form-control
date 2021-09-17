var paciente = document.querySelectorAll(".paciente");

for (i = 0; i < paciente.length; i++) {
    

    var tdAltura = paciente[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdPeso = paciente[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdImc = paciente[i].querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);



    if (!pesoEhValido) {
        tdPeso.textContent = "Peso inválido!";
        tdImc.textContent = "Altura inválida!"
        pesoEhValido = false;
        paciente[i].classList.add('paciente-invalido')

    }

    if (!alturaEhValida) {
        tdAltura.textContent = "Altura inválida!";
        tdImc.textContent = "Altura inválida!"
        alturaEhValida = false;
        paciente[i].classList.add('paciente-invalido')
    }

    if (alturaEhValida && pesoEhValido) {
        
        tdImc.textContent = calculaIMC(peso,altura)

    }

}

function calculaIMC(peso,altura) {
    var imc = 0;
    imc =  peso / (altura * altura);
    return imc.toFixed(2) 
    
   
}

function validaPeso(peso){
    if(peso >= 0 && peso <=1000){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.0){
        return true;
    }else {
        return false;
    }
}

