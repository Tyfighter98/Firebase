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
  const ulList = document.getElementById('list');

  // Create References
  const dbRefObject = firebase.database().ref().child('object');
  const dbRefList = dbRefObject.child('hobbies');

  // Sync Object Changes
  dbRefObject.on('value', snap => {
    preObjects.innerText = JSON.stringify(snap.val(), null, 3);
  });

  // Sync List Changes
  dbRefList.on('child_added', snap => {
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    ulList.appendChild(li);
  });

  dbRefList.on('child_changed', snap => {
    const liChanged = document.getElementById('snap.key');
    liChanged.innerText = snap.val();
  });

  dbRefList.on('child_removed', snap => {
    const liToRemove = document.getElementById('snap.key');
    liToRemove.remove();
  });

}());
