const documentoForm = document.getElementById('documentoForm');
const responseDiv = document.getElementById('response');

documentoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let descricao = ''; 

  // Itera sobre todos os elementos do formulário
  for (const input of documentoForm.elements) {
  // Verifica se o elemento é um input ou textarea e tem um ID e um valor
  if ((input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') && input.id && input.value) {
  // Adiciona o ID e o valor do input à descrição
  descricao += `${input.id}: ${input.value};`;
  }
}
    const data = {
      descricao: descricao
    };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8085/v1/document/cadastrar');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 201) {
      responseDiv.textContent = xhr.responseText;
      testForm.reset();
      alert("Formulário enviado com sucesso!");
    } else {
  
    }
  };
  xhr.send(JSON.stringify(data));
});

