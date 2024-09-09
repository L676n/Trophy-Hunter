 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
 
 import { getDatabase, ref, get, child} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAntSzAjX0ib7_gDU0ZDsj8DgL8Uir6lmc",
  authDomain: "trophy-hunter-b8c80.firebaseapp.com",
  projectId: "trophy-hunter-b8c80",
  storageBucket: "trophy-hunter-b8c80.appspot.com",
  messagingSenderId: "812940690454",
  appId: "1:812940690454:web:81309bdb381d6dced1a137"
};

  // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const database = getDatabase();
 const databaseRef = ref(database);

 const submit1 = document.getElementById("submit1");
submit1.addEventListener("click", function(event){
    event.preventDefault()
    const email1 = document.getElementById("email1").value;
    const password1 = document.getElementById("password1").value;
    signInWithEmailAndPassword(auth, email1, password1)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href ="index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
})

const submit2 = document.getElementById("submit2");
submit2.addEventListener("click", function(event){
    event.preventDefault()
    const email2 = document.getElementById("email2").value;
    const password2 = document.getElementById("password2").value;
    signInWithEmailAndPassword(auth, email2, password2)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    window.location.href ="HomePage.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
})