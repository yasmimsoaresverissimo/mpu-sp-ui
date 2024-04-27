
const documentoForm = document.getElementById('documentoForm');
const responseDiv = document.getElementById('response');

const data = {
  Assunto: ''
};

documentoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  data.Assunto = event.target.Assunto.value;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8082/v1/auth/login');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 201) {
      responseDiv.textContent = xhr.responseText;
    } else {
  
    }
  };
  xhr.send(JSON.stringify(data));
});

