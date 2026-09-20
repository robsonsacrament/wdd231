// ============================================
// DATAS DO RODAPÉ
// ============================================

document.getElementById('anoatual').textContent = new Date().getFullYear();

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