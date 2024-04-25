console.log('oi')
alert('oi')
const loginForm = document.getElementById('loginForm');
const responseDiv = document.getElementById('response');

// Define the data to send with the request
const data = {
  matricula: '',
  password: ''
};

// Add an event listener to the form to handle the submit event
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  data.matricula = event.target.matricula.value;
  data.password = event.target.password.value;
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8082/v1/auth/login');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.status === 200) {
      responseDiv.textContent = xhr.responseText;
    } else {
      console.log('oi')
    }
  };
  xhr.send(JSON.stringify(data));
});