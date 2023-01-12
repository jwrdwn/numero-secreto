function verificaInteiro(chute) {
    return Number.isInteger(parseInt(chute))
}

function verificaAcerto(chute) {
    const dica = document.getElementById('dica')
    if(chute == numeroSecreto) {
        document.body.innerHTML = `
            <h1 id="acertou">Você acertou!</h1>
            <h3>O número secreto era ${numeroSecreto}!</h3>
            <h1 id="smile">:)</h1>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if(chute > numeroSecreto) {
        dica.innerHTML = `<div>O número secreto é menor! <i class="fa-solid fa-circle-down"></i></div>`
    } else {
        dica.innerHTML = `<div>O número secreto é maior! <i class="fa-solid fa-circle-up"></i></div>`
    }
}

document.body.addEventListener('click', evento => {
    if(evento.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
