// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBhMq2YQnsdDfPMHsEUO2n-42xQLR1MsXM",
  authDomain: "fir-web-d11ce.firebaseapp.com",
  databaseURL: "https://fir-web-d11ce-default-rtdb.firebaseio.com",
  projectId: "fir-web-d11ce",
  storageBucket: "fir-web-d11ce.appspot.com",
  messagingSenderId: "910674546570",
  appId: "1:910674546570:web:ba26a451f64a42ba4e4273",
  measurementId: "G-XMBN5MKQWP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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
  document.location.href = "Data.html";
}

function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch((e) => alert(e.message));
  document.location.href = "Data.html";
  //Take user to a different or home page
}

function signOut() {
  auth.signOut();
  alert("Signed Out");
}
