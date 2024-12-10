const botaoDeTrocarCor = document.getElementById('btn-troca-cor')
botaoDeTrocarCor.addEventListener('click', trocarCor)

const backgroundQuadradoAlterado = document.querySelector('.preto')

function trocarCor() {
    if (backgroundQuadradoAlterado.classList.contains('azul')) {
        backgroundQuadradoAlterado.classList.remove('azul')
    } else {
        backgroundQuadradoAlterado.classList.add('azul')
    }
}