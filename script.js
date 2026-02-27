    console.log();

    let grafico;




    function funcao1(x) {
    return (x * x - 1) / (x - 1);
    }

    function funcao2(x) {
    return 1 / x;
    }

    function funcao3(x) {
    return x < 0 ? -1 : 1;
    }

    const funcoes = {
    funcao1,
    funcao2,
    funcao3
    };

    function atualizarGrafico() {

    const seletor = document.getElementById("seletorFuncao").value;
    const f = funcoes[seletor];

    const dadosX = [];
    const dadosY = [];
    const pontoLimite = 0;

    for (let x = -5; x <= 5; x += 0.1) {

        if (Math.abs(x) < 0.0001) {
        dadosX.push(x);
        dadosY.push(null);
        } else {
        dadosX.push(x);
        dadosY.push(f(x));
        }
    }

    if (grafico) {
        grafico.destroy();
    }

    const ctx = document.getElementById('grafico').getContext('2d');

    grafico = new Chart(ctx, {
        type: 'line',
        data: {
        labels: dadosX,
        datasets: [{
            label: 'f(x)',
            data: dadosY,
            borderWidth: 2,
            pointRadius: 0
        }]
        }
    });
    }

    atualizarGrafico();