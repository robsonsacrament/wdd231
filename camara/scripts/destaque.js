// ============================================
// EMPRESAS EM DESTAQUE (nível ouro ou prata)
// ============================================

const membrosDestaque = [
    {
        nome: 'TechPalhoça',
        nivel: 'ouro',
        logo: 'imagens/logo.png',
        telefone: '(48) 3333-2222',
        endereco: 'Rua das Flores, 456',
        site: 'techpalhoca.com'
    },
    {
        nome: 'Moda & Estilo',
        nivel: 'prata',
        logo: 'imagens/logo.png',
        telefone: '(48) 3333-3333',
        endereco: 'Av. Central, 789',
        site: 'modaestilo.com'
    },
    {
        nome: 'Padaria Pão Quente',
        nivel: 'ouro',
        logo: 'imagens/logo.png',
        telefone: '(48) 3333-1111',
        endereco: 'Rua do Comércio, 123',
        site: 'paoquente.com'
    },
    {
        nome: 'Startup Inova',
        nivel: 'prata',
        logo: 'imagens/logo.png',
        telefone: '(48) 3333-6666',
        endereco: 'Rua da Tecnologia, 321',
        site: 'startupinova.com'
    },
    {
        nome: 'Restaurante Sabor do Mar',
        nivel: 'ouro',
        logo: 'imagens/logo.png',
        telefone: '(48) 3333-4444',
        endereco: 'Rua da Praia, 555',
        site: 'sabordomar.com'
    }
];

// ============================================
// EMBARALHAR ARRAY
// ============================================

function embaralhar(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

// ============================================
// MOSTRAR 3 DESTAQUES ALEATÓRIOS
// ============================================

function mostrarDestaques() {
    const container = document.getElementById('destaques');
    if (!container) return;

    const selecionados = embaralhar(membrosDestaque).slice(0, 3);

    container.innerHTML = selecionados.map(m => `
        <article class="empresa-card">
            <img src="${m.logo}" alt="Logo de ${m.nome}" class="logo-empresa" loading="lazy">
            <h4>${m.nome}</h4>
            <p class="nivel-${m.nivel}">Nível: ${m.nivel}</p>
            <p><strong>Telefone:</strong> ${m.telefone}</p>
            <p><strong>Endereço:</strong> ${m.endereco}</p>
            <p><strong>Site:</strong> ${m.site}</p>
        </article>
    `).join('');
}

mostrarDestaques();