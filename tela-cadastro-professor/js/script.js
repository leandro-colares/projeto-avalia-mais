function limparCampos() {
  // Seleciona todos os campos de entrada e select no documento
  const inputs = document.querySelectorAll("input");
  const selects = document.querySelectorAll("select");

  // Limpa valores dos inputs
  inputs.forEach((input) => {
    input.value = "";
  });

  // Reseta selects
  selects.forEach((select) => {
    select.selectedIndex = 0;
  });
}

// Função para formatar a data no formato desejado
function formatarData(data) {
  const opcoes = { day: 'numeric', month: 'long', year: 'numeric' };
  return data.toLocaleDateString('pt-BR', opcoes);
}

// Função para atualizar a data atual na página
function atualizarData() {
  const dataAtual = new Date(); // Captura a data atual
  const dataFormatada = formatarData(dataAtual); // Formata a data
  const elementoData = document.getElementById('dataAtual'); // Seleciona o elemento no HTML

  // Atualiza o conteúdo do elemento com a data formatada
  if (elementoData) {
    elementoData.textContent = `Manaus, ${dataFormatada}`;
  }
}

// Executa a função ao carregar a página
window.onload = atualizarData;


lk