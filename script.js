document.getElementById('start-btn').addEventListener('click', function() {
    document.getElementById('narrative').style.display = 'none';
    document.getElementById('question').style.display = 'block';
});

function checkAnswer(answer) {
    document.getElementById('question').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    
    if (answer === 'correct') {
        document.getElementById('result-text').innerText = 'Você se aproxima da névoa e percebe que ela está te levando para um beco escuro...';
        document.getElementById('next-btn').style.display = 'block';
    } else {
        document.getElementById('result-text').innerText = 'Você corre em direção ao hotel, mas algo te segue nas sombras. Você não tem mais escolha.';
        // Você pode adicionar uma funcionalidade para reiniciar ou levar a um final alternativo
    }
}

document.getElementById('next-btn').addEventListener('click', function() {
    // Avançar para o próximo capítulo ou continuar a história
    alert("Capítulo 2 será desenvolvido...");
});
