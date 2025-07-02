const form = document.getElementById('form');


form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Previne a carga do site

    const peso = document.getElementById('weight').value;
    const altura = document.getElementById('height').value;

    //calculo do IMC
    const imc = (peso / (altura * altura)).toFixed(2);

    //Remover a classe hidden 
    document.getElementById('infos').classList.remove('hidden')


    // condiçoes do imc

    const valor = document.getElementById('value');//aonde vai aparecer o imc

    let descricao = '';//Aonde vai aparecer o texto da descrição

    valor.classList.add('attention'); //adiciona a classe do css

    // valor.style.color = 'red';

    if (imc < 18.5) {
        descricao = 'Cuidado! Você está abaixo do peso!'
    }

    else if ((imc >= 18.5) && (imc <= 25)) {
        descricao = 'Você está no peso ideal!'
        //    valor.style.color = 'green';
        valor.classList.remove('attention');
        valor.classList.add('normal');
    }

    else if ((imc > 25) && (imc <= 30)) {
        descricao = 'Cuidado! Você está com sobrepeso!'
    }

    else if ((imc > 30) && (imc <= 35)) {
        descricao = 'Cuidado! Você está com obesidade moderada!'
    }

    else if ((imc > 35) && (imc <= 40)) {
        descricao = 'Cuidado! Você está com obesidade severa!'
    }

    else {
        descricao = 'Cuidado! Você está com obesidade mórbida!'
    }

    valor.textContent = imc.replace('.', ',');
    document.getElementById('description').textContent = descricao;

    // pegar as classes do css attention e normal


});





