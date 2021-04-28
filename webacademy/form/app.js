// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9n1SBfIthtK7izLP7M1Kh5i2Cnzfphrw",
    authDomain: "contactforn-89491.firebaseapp.com",
    databaseURL: "https://contactforn-89491-default-rtdb.firebaseio.com",
    projectId: "contactforn-89491",
    storageBucket: "contactforn-89491.appspot.com",
    messagingSenderId: "1014809071338",
    appId: "1:1014809071338:web:fe73c97c18d0939ffc1193",
    measurementId: "G-BN93EP9GL5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
