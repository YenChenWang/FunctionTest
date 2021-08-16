// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCvhee_1IeHWlo9Rip6CD-78nklUATcSKw",
  authDomain: "test-91e1e.firebaseapp.com",
  projectId: "test-91e1e",
  storageBucket: "test-91e1e.appspot.com",
  messagingSenderId: "105697915505",
  appId: "1:105697915505:web:55bcb48ddeef0d0b7e61d0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));
  alert("Signed UP");
  document.location.href="Web.html";
}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
  document.location.href="Web.html";
  //Take user to a different or home page
}

function signOut() {
  auth.signOut();
  alert("Signed Out");
}

