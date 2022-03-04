
const firebaseConfig = {
  apiKey: "AIzaSyAZKTQXCanMtPDenQUSokW2MXNin6cwRdo",
  authDomain: "personal-website-de780.firebaseapp.com",
  projectId: "personal-website-de780",
  storageBucket: "personal-website-de780.appspot.com",
  messagingSenderId: "988685245259",
  appId: "1:988685245259:web:c3dee8156ca0b58e2ea6ce",
  measurementId: "G-CX3XY2GCYJ",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const db = firestore.collection("messages");

const form = document.getElementById("messages-form");
const names = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("messageQuerry");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createQuerry();
  clearForm();
});

const createQuerry = () => {
  db.doc().set({
    name: names.value,
    email: email.value,
    message: message.value,
  });
};

const clearForm = () => {
  form.reset();
};
   

