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