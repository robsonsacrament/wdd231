// ============================================
// DIRETÓRIO DE EMPRESAS (array de objetos)
// ============================================

const empresas = [
    {
        nome: 'Padaria Pão Quente',
        categoria: 'alimentacao',
        email: 'contato@paoquente.com',
        telefone: '(48) 3333-1111',
        site: 'paoquente.com'
    },
    {
        nome: 'TechPalhoça',
        categoria: 'tecnologia',
        email: 'contato@techpalhoca.com',
        telefone: '(48) 3333-2222',
        site: 'techpalhoca.com'
    },
    {
        nome: 'Moda & Estilo',
        categoria: 'moda',
        email: 'contato@modaestilo.com',
        telefone: '(48) 3333-3333',
        site: 'modaestilo.com'
    },
    {
        nome: 'Restaurante Sabor do Mar',
        categoria: 'alimentacao',
        email: 'contato@sabordomar.com',
        telefone: '(48) 3333-4444',
        site: 'sabordomar.com'
    },
    {
        nome: 'Contabilidade Silva',
        categoria: 'servicos',
        email: 'contato@contabilsilva.com',
        telefone: '(48) 3333-5555',
        site: 'contabilsilva.com'
    },
    {
        nome: 'Startup Inova',
        categoria: 'tecnologia',
        email: 'contato@startupinova.com',
        telefone: '(48) 3333-6666',
        site: 'startupinova.com'
    }
];

// ============================================
// FUNÇÃO PARA EXIBIR EMPRESAS
// ============================================

function exibirEmpresas(filtro = 'todas') {
    const container = document.getElementById('diretorio');
    if (!container) return;

    const filtradas = filtro === 'todas'
        ? empresas
        : empresas.filter(e => e.categoria === filtro);

    if (filtradas.length === 0) {
        container.innerHTML = '<p>Nenhuma empresa encontrada nesta categoria.</p>';
        return;
    }

    container.innerHTML = filtradas.map(e => `
        <article class="empresa-card">
            <h4>${e.nome}</h4>
            <p><strong>E-mail:</strong> ${e.email}</p>
            <p><strong>Telefone:</strong> ${e.telefone}</p>
            <p><strong>Site:</strong> ${e.site}</p>
        </article>
    `).join('');
}

// ============================================
// FILTRO POR CATEGORIA
// ============================================

const select = document.getElementById('categoria');
if (select) {
    exibirEmpresas('todas');
    select.addEventListener('change', (e) => {
        exibirEmpresas(e.target.value);
    });
}