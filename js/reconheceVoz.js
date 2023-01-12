const elementoChute = document.getElementById('chute')
const palpite = document.getElementById('palpite')
const mensagem = document.getElementById('mensagem')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

var recognition = new SpeechRecognition()
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
    const chute = evento.results[0][0].transcript.replace('.', '')
    verificaInteiro(chute) && chute <= maiorValor ? mostraChute(parseInt(chute)) + verificaAcerto(chute) : mensagemErro(chute)
    
}

function mostraChute(chute) {
    mensagem.innerHTML = 'Você disse:'
    palpite.innerHTML = `${chute}`
    palpite.style.color = 'var(--primary-color)'
    palpite.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.5)'
}

function mensagemErro(chute) {
    if(chute < menorValor || chute > maiorValor) {
        mensagem.innerHTML = `${chute} está fora dos limites! Tente novamente.`
        return
    }
    mensagem.innerHTML = `"${chute}" não é um número! Tente novamente.`
}

recognition.addEventListener('end', () => recognition.start())

