// ============================================
// RODAPÉ - DATA
// ============================================

// Ano atual
document.getElementById('ano').textContent = new Date().getFullYear();

// Data da última modificação
const data = new Date(document.lastModified);
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();
const horas = String(data.getHours()).padStart(2, '0');
const minutos = String(data.getMinutes()).padStart(2, '0');

document.getElementById('modificacao').textContent =
    'Última modificação: ' + dia + '/' + mes + '/' + ano + ' ' + horas + ':' + minutos;

// ============================================
// MENU HAMBÚRGUER (DOM + Evento)
// ============================================

const hamburger = document.getElementById('menu-hamburger');
const nav = document.querySelector('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('open');
        hamburger.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });
}

// ============================================
// DEPOIMENTOS (Array + Template Literal)
// ============================================

const depoimentos = [
    { autor: 'Ana Paula', texto: 'Comecei a correr com os treinos do site e em 3 meses fiz minha primeira prova de 5km!' },
    { autor: 'Carlos Mendes', texto: 'Os planos de treino são muito bem estruturados. Evoluí muito com a ajuda do Corrida & Vida.' },
    { autor: 'Fernanda Souza', texto: 'A melhor comunidade de corrida online. Motivam a gente a nunca desistir.' }
];

const container = document.getElementById('depoimentos');

if (container) {
    let html = '';
    for (let i = 0; i < depoimentos.length; i++) {
        html += '<div class="depoimento">' +
            '<p>"' + depoimentos[i].texto + '"</p>' +
            '<p class="autor">— ' + depoimentos[i].autor + '</p>' +
            '</div>';
    }
    container.innerHTML = html;
}

// ============================================
// FILTRO DE TREINOS (Array + Método filter)
// ============================================

const treinos = [
    { id: 1, titulo: 'Iniciante: 5km em 8 semanas', nivel: 'iniciante', descricao: 'Plano progressivo para começar a correr.' },
    { id: 2, titulo: 'Intermediário: 10km em 10 semanas', nivel: 'intermediario', descricao: 'Aumente sua resistência e velocidade.' },
    { id: 3, titulo: 'Avançado: Meia maratona', nivel: 'avancado', descricao: 'Treino intenso para provas de 21km.' },
    { id: 4, titulo: 'Iniciante: Corrida e caminhada', nivel: 'iniciante', descricao: 'Alternância de corrida e caminhada.' },
    { id: 5, titulo: 'Intermediário: Treino de tiro', nivel: 'intermediario', descricao: 'Sessões de tiro para ganhar velocidade.' },
    { id: 6, titulo: 'Avançado: Maratona 42km', nivel: 'avancado', descricao: 'Plano completo para maratonistas.' }
];

function renderizarTreinos(filtro) {
    const grid = document.getElementById('treinos-grid');
    if (!grid) return;

    let filtrados;
    if (filtro === 'todos') {
        filtrados = treinos;
    } else {
        filtrados = [];
        for (let i = 0; i < treinos.length; i++) {
            if (treinos[i].nivel === filtro) {
                filtrados.push(treinos[i]);
            }
        }
    }

    if (filtrados.length === 0) {
        grid.innerHTML = '<p style="text-align:center;">Nenhum treino encontrado para este nível.</p>';
        return;
    }

    let html = '';
    for (let i = 0; i < filtrados.length; i++) {
        html += '<div class="treino-card">' +
            '<span class="nivel">' + filtrados[i].nivel + '</span>' +
            '<h3>' + filtrados[i].titulo + '</h3>' +
            '<p>' + filtrados[i].descricao + '</p>' +
            '</div>';
    }
    grid.innerHTML = html;
}

const filtroSelect = document.getElementById('categoria');

if (filtroSelect) {
    renderizarTreinos('todos');

    filtroSelect.addEventListener('change', function() {
        renderizarTreinos(this.value);
    });
}

// ============================================
// FORMULÁRIO (Objeto + Array + localStorage)
// ============================================

const form = document.getElementById('form-contato');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const nivel = document.getElementById('nivel').value;

        if (!nome || !email || !nivel) {
            alert('Preencha todos os campos obrigatórios.');
            return;
        }

        // Objeto
        const inscricao = {
            nome: nome,
            email: email,
            nivel: nivel,
            data: new Date().toISOString()
        };

        // Array + localStorage
        let inscricoes = JSON.parse(localStorage.getItem('inscricoes')) || [];
        inscricoes.push(inscricao);
        localStorage.setItem('inscricoes', JSON.stringify(inscricoes));

        // Exibe mensagem
        document.getElementById('mensagem-sucesso').style.display = 'block';
        document.getElementById('nome-usuario').textContent = nome;
        form.reset();
        form.style.display = 'none';

        console.log('Inscrições:', inscricoes);
    });
}