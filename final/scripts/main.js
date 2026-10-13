// ============================================
// MÓDULO PRINCIPAL — Corrida & Vida
// ============================================

import { carregarTreinos } from './treinos.js';

// ============================================
// RODAPÉ — Ano atual + Data de modificação
// ============================================
const anoEl = document.getElementById('ano');
if (anoEl) anoEl.textContent = new Date().getFullYear();

const modEl = document.getElementById('modificacao');
if (modEl) {
    const d = new Date(document.lastModified);
    const pad = (n) => String(n).padStart(2, '0');
    modEl.textContent = `Última modificação: ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

// ============================================
// MENU HAMBÚRGUER (responsivo)
// ============================================
const hamburger = document.getElementById('menu-hamburger');
const nav = document.querySelector('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
        const aberto = nav.classList.contains('open');
        hamburger.textContent = aberto ? '✕' : '☰';
        hamburger.setAttribute('aria-expanded', aberto);
    });
}

// ============================================
// DEPOIMENTOS (array + template literals)
// ============================================
const depoimentos = [
    { autor: 'Ana Paula', texto: 'Comecei a correr com os treinos do site e em 3 meses fiz minha primeira prova de 5km!' },
    { autor: 'Carlos Mendes', texto: 'Os planos de treino são muito bem estruturados. Evoluí muito com a ajuda do Corrida & Vida.' },
    { autor: 'Fernanda Souza', texto: 'A melhor comunidade de corrida online. Motivam a gente a nunca desistir.' }
];

const containerDep = document.getElementById('depoimentos');
if (containerDep) {
    containerDep.innerHTML = depoimentos.map(d => `
        <div class="depoimento">
            <p>"${d.texto}"</p>
            <p class="autor">— ${d.autor}</p>
        </div>
    `).join('');
}

// ============================================
// CARREGAR TREINOS (só roda na página treinos.html)
// ============================================
if (document.getElementById('treinos-grid')) {
    carregarTreinos();
}

// ============================================
// FORMULÁRIO DE CONTATO
// Salva a inscrição no localStorage ANTES
// de o formulário ser enviado via GET
// para formulario-acao.html
// ============================================
const form = document.getElementById('form-contato');

if (form) {
    form.addEventListener('submit', () => {
        // Captura os valores do formulário
        const nome     = document.getElementById('nome').value.trim();
        const email    = document.getElementById('email').value.trim();
        const nivel    = document.getElementById('nivel').value;
        const objetivo = document.getElementById('objetivo').value.trim();

        // Cria o objeto da inscrição
        const inscricao = {
            nome: nome,
            email: email,
            nivel: nivel,
            objetivo: objetivo,
            data: new Date().toISOString()
        };

        // Recupera inscrições anteriores (ou array vazio)
        const inscricoes = JSON.parse(localStorage.getItem('inscricoes')) || [];

        // Adiciona a nova inscrição
        inscricoes.push(inscricao);

        // Salva no localStorage
        localStorage.setItem('inscricoes', JSON.stringify(inscricoes));

        console.log('✅ Inscrição salva no localStorage:', inscricao);
        console.log('📋 Total de inscrições:', inscricoes.length);

        // ⚠️ IMPORTANTE: NÃO usamos preventDefault() aqui!
        // Assim o formulário é enviado normalmente via GET para
        // formulario-acao.html?nome=...&email=...
    });
}