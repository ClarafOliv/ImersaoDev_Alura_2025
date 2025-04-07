function conversor() {
  let valorReais = prompt("Digite um valor em reais:");
  let cotacaoRupee = 9.50; // suposicao: 1 real = 9.50 rupees 

  if (valorReais === null || valorReais.trim() === "") { // .trim -> Remove espacos em branco do inicio e do fim de uma string. Para nao atrapalhar na convesao
    alert("Você não digitou nenhum valor.");
    return;
  }

  let valorConvertido = parseFloat(valorReais) * cotacaoRupee; // -> ParseFloat converte uma string para numero decimal (float). pq uando o prompt() pega um valor, ele sempre retorna como string

  if (isNaN(valorConvertido)) {  //isNaN -> Verifica se o valor não é um número
    alert("Digite um valor numérico válido.");
    return;
  }

  alert("O valor convertido em rupees é: " + valorConvertido.toFixed(2) + " 💎");
}
