import logo from './logo.svg';
import './App.css';

const sendInfo = () => {
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const subjectInput = document.querySelector('#subject');
  const messageInput = document.querySelector('#message');
  const infoDisplay = document.querySelector('.info-display');
  const displayName = document.querySelector('#display-name');
  const displayEmail = document.querySelector('#display-email');
  const displaySubject = document.querySelector('#display-subject');
  const displayMessage = document.querySelector('#display-message');
  const infoArray = [nameInput.value, emailInput.value, subjectInput.value, messageInput.value];

  infoDisplay.style.display = 'block';
  displayName.innerHTML = `<p><strong>Name:</strong></p><p>${nameInput.value}</p>`;
  displayEmail.innerHTML = `<p><strong>Email:</strong></p><p>${emailInput.value}</p>`;
  displaySubject.innerHTML = `<p><strong>Subject:</strong></p><p>${subjectInput.value}</p>`;
  displayMessage.innerHTML = `<p><strong>Message:</strong></p><p>${messageInput.value}</p>`;

  create(infoArray);
  clearForm();
  list();
};

const clearInfo = () => {
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const subjectInput = document.querySelector('#subject');
  const messageInput = document.querySelector('#message');
  const infoDisplay = document.querySelector('.info-display');
  const displayName = document.querySelector('#display-name');
  const displayEmail = document.querySelector('#display-email');
  const displaySubject = document.querySelector('#display-subject');
  const displayMessage = document.querySelector('#display-message');

  nameInput.value = '';
  emailInput.value = '';
  subjectInput.value = '';
  messageInput.value = '';
  infoDisplay.style.display = 'none';
  displayName.textContent = '';
  displayEmail.textContent = '';
  displaySubject.textContent = '';
  displayMessage.innerHTML = '';
};

const clearForm = () => {
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const subjectInput = document.querySelector('#subject');
  const messageInput = document.querySelector('#message');

  nameInput.value = '';
  emailInput.value = '';
  subjectInput.value = '';
  messageInput.value = '';
}

const create = (infoArray) => {
  const data = {
    Name: infoArray[0],
    Email: infoArray[1],
    Subject: infoArray[2],
    Message: infoArray[3]
  };
  const endpoint = `/data-api/rest/Person/`;

  fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.table(data.value));
}

const list = () => {
  const endpoint = '/data-api/rest/Person';

  fetch(endpoint)
    .then(response => response.json())
    .then(data => console.table(data.value));
}

function App() {
  return (
    <>
      <main>
        <div className="col-1">
          <div className="info-form">
            <h1>Please enter your information:</h1>
            <p>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name"></input>
            </p>

            <p>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email"></input>
            </p>

            <p>
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject"></input>
            </p>

            <p>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="10"></textarea>
            </p>

            <p>
              <button id="submit" onClick={() => { sendInfo(); }}>Submit</button>
              <button id="clear" onClick={() => { clearInfo(); }}>Clear</button>
            </p>
          </div>
        </div>

        <div className="col-2">
          <div className="info-display">
            <h2>Info Sent</h2>
            <div id="display-name"></div>

            <div id="display-email"></div>

            <div id="display-subject"></div>

            <div id="display-message"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
