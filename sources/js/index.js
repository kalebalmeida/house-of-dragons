const botoesSlider = document.querySelectorAll(".btn");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")
botoesSlider.forEach((btn, indice) =>{
    btn.addEventListener('click', () => {
        desativarBotaoSelecionado();
        marcarBotaoComoSelecionado(btn);

        esconderImagemAtiva();

        mostrarImademDeFundo(indice);

        esconderInformacoesAtivas();

        mostrarInformacoesDragao(indice);
    });
})

function marcarBotaoComoSelecionado(btn) {
    btn.classList.add("selected");
}

function mostrarInformacoesDragao(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function mostrarImademDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".imagem.ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selected");
    botaoSelecionado.classList.remove("selected");
}
