// Data inicial
const dataInicial = new Date("November 20, 2024 00:00:00");

// Data atual
const dataAtual = new Date();

// Diferença em milissegundos
const diferencaMs = dataAtual - dataInicial;

// Converter para segundos, minutos e dias
const segundosTotais = Math.floor(diferencaMs / 1000);
const minutosTotais = Math.floor(diferencaMs / (1000 * 60));
const diasTotais = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

// Atualizar o texto de uma tag HTML
const resultadoElemento = document.getElementById("resultado");
resultadoElemento.textContent = `Já se passaram:
- ${diasTotais} dias
- ${minutosTotais} minutos
- ${segundosTotais} segundos desde 20 de novembro de 2024.`;
