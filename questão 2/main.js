function verificarNumero() {
    // Recupere o valor do campo de entrada pelo id
    var valorInput = document.getElementById("valorInformado").value;
  
    // Converta o valor para um número
    var valor = parseFloat(valorInput);
  
    if (isNaN(valor)) {
      alert("Por favor, insira um número válido.");
    } else if (valor < 0) {
      alert("O valor é negativo.");
    } else if (valor == 0) {
      alert("O valor é igual a zero.");
    } else {
      alert("O valor é positivo.");
    }
  }