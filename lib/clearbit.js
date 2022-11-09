// get the api link or URL

// const data = {
//   "id": "e6961164-3be1-4952-84af-319d9c766cf4",
//   "name": {
//     "fullName": "Boris Paillard",
//     "givenName": "Boris",
//     "familyName": "Paillard"
//   },
//   "email": "boris@lewagon.org",
//   "location": "Paris, Île-de-France, FR",
//   "timeZone": "Europe/Paris",
//   "utcOffset": 1,
//   "geo": {
//     "city": "Paris",
//     "state": "Île-de-France",
//     "stateCode": null,
//     "country": "France",
//     "countryCode": "FR",
//     "lat": 48.856614,
//     "lng": 2.3522219
//   },
//   "bio": "CEO @Lewagonparis - global leader in immersive tech training",
//   "site": "http://lewagon.org",
//   "avatar": "https://d1ts43dypk8bqh.cloudfront.net/v1/avatars/e6961164-3be1-4952-84af-319d9c766cf4",
//   "employment": {
//     "domain": "lewagon.com",
//     "name": "Le Wagon",
//     "title": "CEO",
//     "role": "leadership",
//     "subRole": "ceo",
//     "seniority": "executive"
//   },
//   "facebook": {
//     "handle": null
//   },
//   "github": {
//     "handle": "Papillard",
//     "id": 2471555,
//     "avatar": "https://avatars.githubusercontent.com/u/2471555?v=4",
//     "company": "Le Wagon",
//     "blog": "https://www.lewagon.com",
//     "followers": 1230,
//     "following": 7
//   },
//   "twitter": {
//     "handle": "bpapillard",
//     "id": 1600595036,
//     "bio": "CEO @Lewagonparis - global leader in immersive tech training",
//     "followers": 1548,
//     "following": 153,
//     "statuses": 271,
//     "favorites": 381,
//     "location": "Paris",
//     "site": "http://lewagon.org",
//     "avatar": "https://pbs.twimg.com/profile_images/1576960586579050496/WTcgyAzo.jpg"
//   },
//   "linkedin": {
//     "handle": "in/boris-paillard-86722670"
//   },
//   "googleplus": {
//     "handle": null
//   },
//   "gravatar": {
//     "handle": null,
//     "urls": [

//     ],
//     "avatar": null,
//     "avatars": [

//     ]
//   },
//   "fuzzy": false,
//   "emailProvider": false,
//   "indexedAt": "2022-11-04T05:30:01.894Z"
// }

// // Find all necessary variables / selectors
// const nameTable = document.querySelector("#userName");
// const emailTable = document.querySelector("#userEmail");
// const bioTable = document.querySelector("#userBio");
// const locationTable = document.querySelector("#userLocation");

// // Form
// // form itsself
// const inputForm = document.querySelector("#clearbitForm")
// // button to submit
// const button = document.querySelector("#clearbitSubmit")
// // input field (search email)
// const emailInput = document.querySelector("#clearbitEmail")

// // listen to form submission
// inputForm.addEventListener("submit", (event) => {
//   // change url with user email
//   event.preventDefault();
//   const url = `https://person.clearbit.com/v2/people/find?email=${emailInput.value}`
//   // start asking clearbit for information
//   // fetch(docURL, { headers: { "Authorization": authorizationKey } })
//   //   .then(response => response.json())
//   //   .then((data) => {
//   //     console.log(data)
//   //   })

//   fetch(url, { headers: { Authorization: authorization } })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       nameTable.innerText = data.name.fullName
//     });

//   // populate the table


// })

// const authorization = "Bearer sk_CREATE_AI_KEY_WITH_CLEARBIT_ACCOUNT";
const form = document.getElementById('clearbitForm');
const button = document.getElementById('clearbitSubmit');
const email = document.getElementById('clearbitEmail');

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userBio = document.getElementById('userBio');
const userLocation = document.getElementById('userLocation');

const getInputValue = () => email.value;

const callClearbitApi = (inputEmail, callback) => {
  const url = `https://person.clearbit.com/v1/people/email/${inputEmail}`;
  const authorization = "Bearer sk_814c9a36688fc9c4f38fb3027dddc22f";

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
