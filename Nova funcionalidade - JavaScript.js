function abrir() {
  document.getElementById("aba_lateral").style.width = "70%";
}

function fechar() {
  document.getElementById("aba_lateral").style.width = "0";
}

function abrir2() {
  document.getElementById("aba_inversa").style.width = "70%";
}

function fechar2() {
  document.getElementById("aba_inversa").style.width = "0";
}

function tema_escuro() {
    document.documentElement.style.setProperty('--cor-fundo', '#121212');
    document.documentElement.style.setProperty('--cor-sombra', '#1E1E1E');
    document.documentElement.style.setProperty('--cor-texto', '#E0E0E0');
    document.documentElement.style.setProperty('--cor-caixa', '#1F1B24');
    document.documentElement.style.setProperty('--cor-header', '#282A36');
    document.documentElement.style.setProperty('--cor-aba', '#21222C');
    document.documentElement.style.setProperty('--cor-icone', 'white');
}


function tema_padrao() {
    document.documentElement.style.setProperty('--cor-fundo', '#FAFAFA ');
    document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
    document.documentElement.style.setProperty('--cor-texto', 'black');
    document.documentElement.style.setProperty('--cor-caixa', 'white');
    document.documentElement.style.setProperty('--cor-header', 'blue');
    document.documentElement.style.setProperty('--cor-aba', 'white');
    document.documentElement.style.setProperty('--cor-icone', 'blue');
}

const bibliotecaItens = [
  "Livro: Física 3 - devolução até 14h 15/10",
  "Sala de estudos - devolução até 15h30 14/10",
  "Armário biblioteca - devolução na saída",
  "Solicitar extensão de prazo mediante pagamento"
];

const almoxarifadoItens = [
  "CI 7476 - Quantidade: 2 - devolução até 2/12",
  "Protoboard - Quantidade: 2 - devolução até 2/12",
  "Jumpers - Quantidade: 20 - Devolução até 2/12",
  "Solicitar extensão de prazo mediante pagamento"
];

function alterarSecao(secao) {
  const tituloSecao = document.getElementById("texto-secao");
  const iconeSecao = document.getElementById("icone-secao");
  const caixas = document.getElementById("caixas");

  caixas.style.opacity = 0;
  caixas.style.transform = "translateY(10px)";

  setTimeout(() => {
    if (secao === "biblioteca") {
      tituloSecao.textContent = "Itens emprestados da biblioteca";
      iconeSecao.textContent = "library_books"; // Ícone de biblioteca
      
      caixas.innerHTML = bibliotecaItens.map(
        item => `<div class="font caixa">${item}</div>`
      ).join("");
    } 
    
    else {
      tituloSecao.textContent = "Itens emprestados do almoxarifado";
      iconeSecao.textContent = "inventory"; // Ícone de almoxarifado
      
      caixas.innerHTML = almoxarifadoItens.map(
        item => `<div class="font caixa">${item}</div>`
      ).join("");
    }

    caixas.style.opacity = 1;
    caixas.style.transform = "translateY(0)";
  }, 300);
}

document.addEventListener("DOMContentLoaded", () => alterarSecao("biblioteca"));
