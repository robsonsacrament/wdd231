// ============================================
// DATAS DO RODAPÉ
// ============================================

document.getElementById('anoatual').textContent = new Date().getFullYear();

const dataModificacao = new Date(document.lastModified);
const dia = String(dataModificacao.getDate()).padStart(2, '0');
const mes = String(dataModificacao.getMonth() + 1).padStart(2, '0');
const ano = dataModificacao.getFullYear();
const horas = String(dataModificacao.getHours()).padStart(2, '0');
const minutos = String(dataModificacao.getMinutes()).padStart(2, '0');

const dataFormatada = dia + '/' + mes + '/' + ano + ' ' + horas + ':' + minutos;

document.getElementById('ultimaModificacao').textContent =
    'Última modificação: ' + dataFormatada;

// ============================================
// ARRAY DE PRODUTOS
// ============================================

const produtos = [
    { id: 'p1', nome: 'Smartphone X Pro' },
    { id: 'p2', nome: 'Notebook Ultra Slim' },
    { id: 'p3', nome: 'Fone de Ouvido Bluetooth' },
    { id: 'p4', nome: 'Tablet 10" Premium' },
    { id: 'p5', nome: 'Smartwatch Fitness' },
    { id: 'p6', nome: 'Caixa de Som Portátil' }
];

// ============================================
// PREENCHER O SELECT DE PRODUTOS
// ============================================

const selectProduto = document.getElementById('produto');

produtos.forEach(prod => {
    const option = document.createElement('option');
    option.value = prod.id;
    option.textContent = prod.nome;
    selectProduto.appendChild(option);
});