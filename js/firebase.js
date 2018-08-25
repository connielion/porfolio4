// Initialize Firebase
var config = {
 apiKey: "AIzaSyCJtVXLazSYaMdPS11YDrD6u9vtd7VtU2A",
 authDomain: "portf-contact.firebaseapp.com",
 databaseURL: "https://portf-contact.firebaseio.com",
 projectId: "portf-contact",
 storageBucket: "portf-contact.appspot.com",
 messagingSenderId: "174790242599"
};
firebase.initializeApp(config);


// get form values
function getInput(id) {
  return document.getElementById(id).value;
}

// listen for formm Submit
document.getElementById('form').addEventListener('submit', formSub);

function formSub(e) {
  e.preventDefault();
  // get form input
  var first_name = getInput('first_name');
  var last_name = getInput('last_name');
  var phone = getInput('phone');
  var email = getInput('email');
  var message = getInput('message');

// call save message function when submitting
  saveMessage(first_name, last_name, phone, email, message);

  // form submitted alert
  document.querySelector('.formAlert').style.display = 'block';
  // alert disappear after 3 secs
  setTimeout(
    function() {
      document.querySelector('.formAlert').style.display= 'none';
    }, 3000
  );

  //clear form
  document.getElementById('form').reset();
}

// reference messages collection

var messageref = firebase.database().ref('messages');


// save message to firebasejs
function saveMessage(first_name, last_name, phone, email, message)
{
  var newMessage = messageref.push();
  newMessage.set({
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone: phone,
    message: message
  })
}
