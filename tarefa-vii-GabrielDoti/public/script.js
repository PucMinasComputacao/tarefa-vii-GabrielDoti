let nome, renda, qtdDespesas;

function gerarCamposDespesas() {
    nome = document.getElementById("Nome").value;
    let rendaRaw = document.getElementById("Renda").value;
    let qtdRaw = document.getElementById("quantidade").value;

    if (!nome || isNaN(Number(rendaRaw)) || isNaN(Number(qtdRaw)) || rendaRaw === "" || qtdRaw === "") {
        alert("Por favor, preencha todos os campos com números válidos.");
        return;
    }

    renda = Number(rendaRaw);
    let qtdInformada = Number(qtdRaw);

    qtdDespesas = qtdInformada;
    if (qtdDespesas < 1) qtdDespesas = 1;
    if (qtdDespesas > 5) qtdDespesas = 5;

    let lista = document.getElementById("listaInputs");
    lista.innerHTML = "";

    for (let i = 1; i <= qtdDespesas; i++) {
        lista.innerHTML += `<input type="text" class="valorDespesa" placeholder="Valor da Despesa ${i}">`;
    }

    document.getElementById("secaoDespesas").style.display = "block";
}

function calcularFinal() {
    let inputs = document.getElementsByClassName("valorDespesa");
    let totalDespesas = 0;

    for (let i = 0; i < inputs.length; i++) {
        let valor = Number(inputs[i].value);
        if (isNaN(valor) || inputs[i].value === "") {
            alert("Preencha todas as despesas com números válidos.");
            return;
        }
        totalDespesas += valor;
    }

    let sobra = renda - totalDespesas;
    let classificacao = "";

    if (totalDespesas > renda) {
        classificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
    } else {
        if (sobra >= (renda * 0.3)) {
            classificacao = "✅ Ótimo: boa margem de sobra.";
        } else {
            classificacao = "🙂 Ok: dá para melhorar a sobra.";
        }
    }

    let resumo = `Nome: ${nome} | Renda: ${renda.toFixed(2)} | Despesas: ${totalDespesas.toFixed(2)} | Sobra: ${sobra.toFixed(2)} | Status: ${classificacao}`;

    console.log(resumo);
    alert(resumo);

    let divRes = document.getElementById("resultado");
    divRes.style.display = "block";
    divRes.innerHTML = `
        <hr>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Renda:</strong> R$ ${renda.toFixed(2)}</p>
        <p><strong>Total Despesas:</strong> R$ ${totalDespesas.toFixed(2)}</p>
        <p><strong>Sobra:</strong> R$ ${sobra.toFixed(2)}</p>
        <p><strong>Status:</strong> ${classificacao}</p>
    `;
}
