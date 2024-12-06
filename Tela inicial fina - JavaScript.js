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

function abrir_popup() {
    document.getElementById("popup_notificacoes").style.display = "block";
}

function fechar_popup() {
    document.getElementById("popup_notificacoes").style.display = "none";
}

function abrir_popup2() {
    document.getElementById("popup_emails").style.display = "block";
}

function fechar_popup2() {
    document.getElementById("popup_emails").style.display = "none";
}

function abrir_popup3() {
    document.getElementById("popup_msgs").style.display = "block";
}

function fechar_popup3() {
    document.getElementById("popup_msgs").style.display = "none";
}

function abrir_popup4() {
    document.getElementById("popup_eventos").style.display = "block";
}

function fechar_popup4() {
    document.getElementById("popup_eventos").style.display = "none";
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
    document.documentElement.style.setProperty('--cor-fundo', '#F5F5F5');
    document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
    document.documentElement.style.setProperty('--cor-texto', 'black');
    document.documentElement.style.setProperty('--cor-caixa', 'white');
    document.documentElement.style.setProperty('--cor-header', 'blue');
    document.documentElement.style.setProperty('--cor-aba', 'white');
    document.documentElement.style.setProperty('--cor-icone', 'blue');
}
