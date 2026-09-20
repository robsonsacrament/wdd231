// ============================================
// DATAS DO RODAPÉ
// ============================================

const anoAtual = document.getElementById('anoatual');
if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}

const modElement = document.getElementById('ultimaModificacao');
if (modElement) {
    const data = new Date(document.lastModified);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    modElement.textContent = `Última modificação: ${dia}/${mes}/${ano}`;
}

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
// EVENTOS
// ============================================

const eventosLista = document.getElementById('eventos-lista');
if (eventosLista) {
    const eventos = [
        'Workshop de Marketing Digital - 25/09',
        'Almoço de Networking - 30/09',
        'Feira de Negócios - 05/10'
    ];
    eventosLista.innerHTML = '<ul>' +
        eventos.map(e => `<li>${e}</li>`).join('') +
        '</ul>';
}