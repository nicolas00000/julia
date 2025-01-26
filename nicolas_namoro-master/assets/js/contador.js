// // Data inicial
// newFunction();
// function newFunction() {
//     const dataInicial = new Date("November 20, 2024 00:00:00");

//     // Data atual
//     const dataAtual = new Date();

//     // Diferença em milissegundos
//     const diferencaMs = dataAtual - dataInicial;

//     // Converter para segundos, minutos e dias
//     const segundosTotais = Math.floor(diferencaMs / 1000);
//     const minutosTotais = Math.floor(diferencaMs / (1000 * 60));
//     const diasTotais = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

//     // Atualizar o texto de uma tag HTML
//     const resultadoElemento = document.getElementById("resultado");
//     resultadoElemento.textContent = `Já se passaram:
// - ${diasTotais} dias
// - ${minutosTotais} minutos
// - ${segundosTotais} segundos desde 20 de novembro de 2024.`;
// }
 
const dataInicial = new Date('2024-11-20');

    function atualizarContador() {
      // Data atual
      const agora = new Date();

      // Calcula a diferença em milissegundos
      const diferencaEmMs = agora - dataInicial;

      // Converte para valores
      const segundosTotais = Math.floor(diferencaEmMs / 1000);
      const dias = Math.floor(segundosTotais / 86400); // 86400 segundos em um dia
      const minutosTotais = Math.floor(segundosTotais / 60);
      const minutos = minutosTotais % 60;
      const segundos = segundosTotais % 60;

      // Atualiza o contador
      document.getElementById('contador').innerHTML = `
      <div class="contadorzinho"> 
      <span class="numero"></span><span class="texto">TE AMANDO EXATAMENTE À</span>
        <span class="numero">${dias}</span><span class="texto"> DIAS</span>
        <span class="numero">${minutos}</span><span class="texto"> MINUTOS</span>
        <span class="numero">${segundos}</span><span class="texto"> SEGUNDOS</span>
      </div>
        `
      ;
    }

    // Atualiza o contador ao carregar a página
    atualizarContador();

    // Atualiza o contador a cada 1 segundo
    setInterval(atualizarContador, 1000);
  