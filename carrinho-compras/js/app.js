let totalGeral;
limpar();

function adicionar() {
    // recuperar valores nome, quantidade e valor do produto
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    
    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }
    // calcular o preço
    let preco = quantidade * valorUnitario;
    // adicionar o carrinho
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span>${produto}<span class="texto-azul">${preco}</span>
        </section>`
    // atualizar valor total
    totalGeral = totalGeral + preco;
    let valorTotal = document.getElementById("valor-total");
    valorTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById("quantidade").value = 0;
}


function limpar() {
    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
}