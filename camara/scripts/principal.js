// ============================================
// DATAS DO RODAPÉ
// ============================================

document.getElementById('anoatual').textContent = new Date().getFullYear();

// Data da última modificação em formato brasileiro
const data = new Date(document.lastModified);
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();
document.getElementById('ultimaModificacao').textContent =
    `Última modificação: ${dia}/${mes}/${ano}`;

// ============================================
// MENU HAMBÚRGUER
// ============================================

const hamburger = document.getElementById('menu-hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        hamburger.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });
}

// ============================================
// CLIMA (simulado, fixo por enquanto)
// ============================================

const climaAtual = document.getElementById('clima-atual');
if (climaAtual) {
    const temperatura = 22;
    const condicao = 'Parcialmente Nublado';
    const umidade = 34;
    const nascer = '7:30';
    const por = '20:59';

    climaAtual.innerHTML = `
        <p><strong>${temperatura}°C</strong></p>
        <p>${condicao}</p>
        <p>Umidade: ${umidade}%</p>
        <p>Nascer do Sol: ${nascer}</p>
        <p>Pôr do Sol: ${por}</p>
    `;
}

const previsao = document.getElementById('previsao-clima');
if (previsao) {
    previsao.innerHTML = `
        <p>Hoje: 32°C</p>
        <p>Quarta-feira: 31°C</p>
        <p>Sexta-feira: 18°C</p>
    `;
}

// ============================================
// EVENTOS (simulados)
// ============================================

const eventos = document.getElementById('eventos-lista');
if (eventos) {
    const lista = [
        'Workshop de Marketing Digital',
        'Almoço de Networking',
        'Feira de Negócios'
    ];
    eventos.innerHTML = '<ul>' + lista.map(e => `<li>${e}</li>`).join('') + '</ul>';
}

// ============================================
// FORMULÁRIO DE ASSOCIAÇÃO
// ============================================

const form = document.getElementById('form-associacao');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value.trim();

        if (!nome) return;

        document.getElementById('nome-usuario').textContent = nome;
        document.getElementById('mensagem-sucesso').style.display = 'block';
        form.style.display = 'none';
    });
}