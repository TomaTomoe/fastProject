// Initialize Firebase
var config = {
  apiKey: "AIzaSyCSg_-bFDM_uGfJADaGTHu1sGaQFC1LA6M",
  authDomain: "tovszksumyua.firebaseapp.com",
  databaseURL: "https://tovszksumyua.firebaseio.com",
  projectId: "tovszksumyua",
  storageBucket: "tovszksumyua.appspot.com",
  messagingSenderId: "1019768179053"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
if ($('#contactFormStatic').length){
  document.getElementById('contactFormStatic').addEventListener('submit', submitForm);
}
if ($('#contactForm').length ){
  document.getElementById('contactForm').addEventListener('submit', submitForm);
}

//Submit for
function submitForm(e) {
  e.preventDefault();
  var id = e.target.getAttribute('id');
  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('tel');
  var message = getInputVal('message');

// Save message
  saveMessage(name, email, phone, message);

// Show alert
  document.querySelector('#successMessage').classList.remove('hidden');

// Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('#successMessage').classList.add('hidden');
  },3000);

// Clear form
  document.getElementById(id).reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}
