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
  const preObjects = document.getElementById('object');

  // Create References
  const dbRefObject = firebase.database().ref().child('object');

  // Sync Object Changes
  dbRefObject.on('value', snap => {
    preObjects.innerText = JSON.stringify(snap.val(), null, 3);
  });


}());
