function clicou() {
    var nome = document.getElementById('inome').value
    var email = document.getElementById('iemail').value
    var tel = document.getElementById('itel').value
    var msg = document.getElementById('imsg').value
    console.log(nome.length)
    if (nome.length == 0 || email.length == 0 || tel.length == 0 || msg.length == 0) {
        alert('Preencha o formulário completo!')
    } else {
        let section = document.querySelector('section')
        section.style.backgroundColor = '#ffffff'
        section.style.textAlign = 'center'
        section.style.fontSize = '2em'
        section.innerHTML = `<p>Obrigado por responder!</p>`
    }
}