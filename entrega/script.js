// Função para calcular o frete
function calcularFrete() {
  var cep = document.getElementById('cep').value; // Obtém o valor do CEP

  if (!cep.match(/^\d{5}-\d{3}$/)) { // Verifica se o CEP está no formato correto
    document.getElementById('resultado-frete').innerHTML = "Por favor, insira um CEP válido no formato 00000-000.";
    return;
  }

  var valorFrete;
  var regiao = cep.substring(0, 1); // Obtém o primeiro dígito do CEP para determinar a região
  
  switch (regiao) {
    case '0':
      valorFrete = "R$ 15,00";
      break;
    case '1':
    case '2':
    case '3':
      valorFrete = "R$ 25,00";
      break;
    case '4':
    case '5':
      valorFrete = "R$ 35,00";
      break;
    case '6':
    case '7':
    case '8':
    case '9':
      valorFrete = "R$ 45,00";
      break;
    default:
      valorFrete = "Frete não disponível para o CEP informado.";
  }

  // Exibe o resultado do frete
  document.getElementById('resultado-frete').innerHTML = `O valor do frete para o CEP ${cep} é ${valorFrete}.`;
}

// Adiciona o evento de clique ao botão
document.getElementById('calcularFrete').addEventListener('click', function(event) {
  event.preventDefault(); // Evita a atualização da página
  calcularFrete(); // Chama a função para calcular o frete
});
