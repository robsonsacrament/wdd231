// ============================================
// CLIMA - API OpenWeatherMap
// ============================================

// Coordenadas de Palhoça/SC
const latitude = -27.64;
const longitude = -48.67;

const apiKey = "2eaf2422bb67137ad5bc459479e29169";

const urlAtual = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_BR&appid=${apiKey}`;
const urlPrevisao = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_BR&appid=${apiKey}`;

async function apiFetch(url) {
    try {
        const resposta = await fetch(url);
        if (resposta.ok) {
            return await resposta.json();
        } else {
            throw new Error(await resposta.text());
        }
    } catch (erro) {
        console.error("Erro na API:", erro);
        return null;
    }
}

async function mostrarClimaAtual() {
    const dados = await apiFetch(urlAtual);
    const container = document.getElementById('clima-atual');
    if (!dados || !container) return;

    const temp = Math.round(dados.main.temp);
    const desc = dados.weather[0].description;
    const icone = dados.weather[0].icon;

    container.innerHTML = `
        <p class="temp-grande">${temp}°C</p>
        <img src="https://openweathermap.org/img/wn/${icone}@2x.png" alt="${desc}">
        <p>${desc}</p>
    `;
}

async function mostrarPrevisao() {
    const dados = await apiFetch(urlPrevisao);
    const container = document.getElementById('previsao-clima');
    if (!dados || !container) return;

    const dias = {};
    dados.list.forEach(item => {
        const data = item.dt_txt.split(" ")[0];
        if (!dias[data]) dias[data] = item;
    });

    const proximos3 = Object.values(dias).slice(1, 4);

    container.innerHTML = proximos3.map(dia => {
        const dataObj = new Date(dia.dt * 1000);
        const diaSemana = dataObj.toLocaleDateString('pt-BR', { weekday: 'short' });
        const temp = Math.round(dia.main.temp);
        return `<p><strong>${diaSemana}:</strong> ${temp}°C</p>`;
    }).join('');
}

mostrarClimaAtual();
mostrarPrevisao();