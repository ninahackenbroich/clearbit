// get the api link or URL

const form = document.getElementById('clearbitForm');
const button = document.getElementById('clearbitSubmit');
const email = document.getElementById('clearbitEmail');

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userBio = document.getElementById('userBio');
const userLocation = document.getElementById('userLocation');

const authorization = "Bearer sk_814c9a36688fc9c4f38fb3027dddc22f";

const getInputValue = () => email.value;

const callClearbitApi = (inputEmail, callback) => {
  const url = `https://person.clearbit.com/v1/people/email/${inputEmail}`;

  fetch(url, { headers: { Authorization: authorization } })
    .then(response => response.json())
    .then((data) => {
      callback(data);
    });
};

const setUserInfo = (data) => {
  userName.innerText = data.name.fullName;
  userEmail.innerText = data.email;
  userBio.innerText = data.bio;
  userLocation.innerText = data.location;
};

const fetchUserInfo = (event) => {
  event.preventDefault();
  const inputEmail = getInputValue();
  callClearbitApi(inputEmail, setUserInfo);
};

form.addEventListener('submit', fetchUserInfo)
