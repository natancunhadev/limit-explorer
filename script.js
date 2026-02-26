console.log();


// coloquei essa função a ser analisada

// f(x) = (x² - 1) / (x - 1)
function f(x) {
  return (x * x - 1) / (x - 1);
}

const pontoLimite = 1;

// quis gerar pontos para o gráfico
// e marcar, basicamente 

const dadosX = [];
const dadosY = [];

for (let x = -5; x <= 5; x += 0.1) {

  // aqui tem a anulação de divisão por zero
  if (Math.abs(x - pontoLimite) < 0.0001) {
    dadosX.push(x);
    dadosY.push(null);
  } else {
    dadosX.push(x);
    dadosY.push(f(x));
  }
}


// aproximação do limite pois é sobre limites - e derivadas


function aproximarLimite(f, a, h = 0.0001) {
  const esquerda = f(a - h);
  const direita = f(a + h);
  return (esquerda + direita) / 2;
}

const limiteAproximado = aproximarLimite(f, pontoLimite);

console.log("Limite aproximado:", limiteAproximado);


// aqui vai ser o nosso grafico, usei o chart.js, 


const ctx = document.getElementById('grafico').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: dadosX,
    datasets: [
      {
        label: 'f(x)',
        data: dadosY,
        borderColor: 'brown',
        borderWidth: 2,
        pointRadius: 0,
        spanGaps: false
      },
      {
        label: 'Limite Aproximado',
        data: dadosX.map(x => limiteAproximado),
        borderColor: '#212637',
        borderDash: [5, ],
        pointRadius: 0
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'x'
        }
      },
      y: {
        title: {
          display: true,
          text: 'f(x)'
        }
      }
    }
  }
});



