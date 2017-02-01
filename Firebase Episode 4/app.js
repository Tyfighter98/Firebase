(function() {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBhsnfc_5tamWbgVHmMJlr_OcS3k78AR2E",
    authDomain: "web-quickstart-8d712.firebaseapp.com",
    databaseURL: "https://web-quickstart-8d712.firebaseio.com",
    storageBucket: "web-quickstart-8d712.appspot.com",
    messagingSenderId: "743655339983"
  };
  firebase.initializeApp(config);

  // Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Add Login Event
  btnLogin.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign im
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // Add Signup Event
  btnSignUp.addEventListener('click', e => {
    // Get email and pass
    // TODO check for real email
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign im
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // Add a realtime listner
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
    }
    else {
      console.log('not logged in');
    }
  });

}());
