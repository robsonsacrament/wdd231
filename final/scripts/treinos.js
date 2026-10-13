// ============================================
// MÓDULO: Treinos (fetch, filtros, modal, favoritos)
// ============================================

let todosOsTreinos = [];
let favoritos = JSON.parse(localStorage.getItem('treinosFavoritos')) || [];

// ============================================
// BUSCAR DADOS DO JSON (Fetch API + try/catch)
// ============================================
export async function carregarTreinos() {
    try {
        const resposta = await fetch('dados/treinos.json');

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        todosOsTreinos = await resposta.json();
        console.log('✅ Treinos carregados:', todosOsTreinos.length);

        renderizarTreinos('todos');
        configurarFiltro();
        configurarModal();
    } catch (erro) {
        console.error('❌ Erro ao carregar treinos:', erro);
        const grid = document.getElementById('treinos-grid');
        if (grid) {
            grid.innerHTML = `
                <p class="mensagem-erro">
                    Não foi possível carregar os treinos. Tente novamente mais tarde.
                </p>
            `;
        }
    }
}

// ============================================
// RENDERIZAR CARDS (map + template literals)
// ============================================
function renderizarTreinos(nivel) {
    const grid = document.getElementById('treinos-grid');
    if (!grid) return;

    // Usa filter + map (métodos de array)
    const filtrados = nivel === 'todos'
        ? todosOsTreinos
        : todosOsTreinos.filter(t => t.nivel === nivel);

    if (filtrados.length === 0) {
        grid.innerHTML = '<p class="mensagem-vazia">Nenhum treino encontrado para este nível.</p>';
        return;
    }

    // Template literals + map
    grid.innerHTML = filtrados.map(treino => {
        const ehFavorito = favoritos.includes(treino.id);

        return `
            <article class="treino-card" data-id="${treino.id}">
                <div class="card-header">
                    <span class="nivel nivel-${treino.nivel}">${treino.nivel}</span>
                    <button
                        class="btn-favorito ${ehFavorito ? 'ativo' : ''}"
                        data-id="${treino.id}"
                        aria-label="${ehFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
                        title="${ehFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}">
                        ${ehFavorito ? '★' : '☆'}
                    </button>
                </div>
               <h2 class="treino-titulo">${treino.titulo}</h2>
                <ul class="treino-meta">
                    <li>📏 <strong>Distância:</strong> ${treino.distancia}</li>
                    <li>⏱️ <strong>Duração:</strong> ${treino.duracao}</li>
                </ul>
                <p class="treino-descricao">${treino.descricao}</p>
                <button class="btn-detalhes" data-id="${treino.id}">
                    Ver detalhes
                </button>
            </article>
        `;
    }).join('');

    // Eventos nos botões (delegação)
    grid.querySelectorAll('.btn-detalhes').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = Number(e.currentTarget.dataset.id);
            abrirModal(id);
        });
    });

    grid.querySelectorAll('.btn-favorito').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = Number(e.currentTarget.dataset.id);
            alternarFavorito(id);
            renderizarTreinos(nivel); // re-renderiza
        });
    });
}

// ============================================
// FILTRO POR NÍVEL
// ============================================
function configurarFiltro() {
    const select = document.getElementById('categoria');
    if (!select) return;

    select.addEventListener('change', (e) => {
        renderizarTreinos(e.target.value);
    });
}

// ============================================
// MODAL DE DETALHES (<dialog>)
// ============================================
function configurarModal() {
    const modal = document.getElementById('modal-treino');
    const btnFechar = document.getElementById('fechar-modal');

    if (!modal || !btnFechar) return;

    btnFechar.addEventListener('click', () => modal.close());

    // Fechar clicando fora
    modal.addEventListener('click', (e) => {
        const rect = modal.getBoundingClientRect();
        const fora = (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        );
        if (fora) modal.close();
    });
}

function abrirModal(id) {
    const treino = todosOsTreinos.find(t => t.id === id);
    if (!treino) return;

    const modal = document.getElementById('modal-treino');
    const titulo = document.getElementById('modal-titulo');
    const corpo = document.getElementById('modal-corpo');

    titulo.textContent = treino.titulo;
    corpo.innerHTML = `
        <p><strong>Nível:</strong> ${treino.nivel}</p>
        <p><strong>Distância:</strong> ${treino.distancia}</p>
        <p><strong>Duração:</strong> ${treino.duracao}</p>
        <p><strong>Descrição:</strong> ${treino.descricao}</p>
    `;

    modal.showModal();
}

// ============================================
// FAVORITOS (localStorage)
// ============================================
function alternarFavorito(id) {
    const index = favoritos.indexOf(id);

    if (index === -1) {
        favoritos.push(id);
    } else {
        favoritos.splice(index, 1);
    }

    localStorage.setItem('treinosFavoritos', JSON.stringify(favoritos));
}