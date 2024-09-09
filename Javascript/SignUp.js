// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

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
const auth = getAuth();
const database = getDatabase(app);

// Function to display messages
const displayMessageAll = (message) => {
  const messageDiv1 = document.getElementById("CheckAll1");
  messageDiv1.textContent = message;
  messageDiv1.style.display = 'block'; // Ensure the message is visible

  const messageDiv2 = document.getElementById("CheckAll2");
  messageDiv2.textContent = message;
  messageDiv2.style.display = 'block';
};

const displayMessageEmail = (message) => {
  const messageDiv1 = document.getElementById("CheckEmail1");
  messageDiv1.textContent = message;
  messageDiv1.style.display = 'block'; // Ensure the message is visible

  const messageDiv2 = document.getElementById("CheckEmail2");
  messageDiv2.textContent = message;
  messageDiv2.style.display = 'block'; 
};

const displayMessagePassword = (message) => {
  const messageDiv1 = document.getElementById("CheckPassword1");
  messageDiv1.textContent = message;
  messageDiv1.style.display = 'block'; // Ensure the message is visible

  const messageDiv2 = document.getElementById("CheckPassword2");
  messageDiv2.textContent = message;
  messageDiv2.style.display = 'block'; 
};

// Validate input function
const validateInput = (username, email, password) => {
  // Check if fields are empty
  if (!username || !email || !password) {
    displayMessageAll("يجب ملء جميع الحقول");
    return false;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    displayMessageEmail("يرجى التحقق من الايميل");
    return false;
  }

  // Check password length
  if (password.length < 6) {
    displayMessagePassword("يجب ان يكون طول كلمة السر 6 على الاقل");
    return false;
  }

  return true;
};

const submit1 = document.getElementById("submit1");
submit1.addEventListener("click", function(event){
    event.preventDefault();
    const username1 = document.getElementById("username1").value;
    const email1 = document.getElementById("email1").value;
    const password1 = document.getElementById("password1").value;

      // Validate inputs
  if (!validateInput(username1, email1, password1)) return;

    createUserWithEmailAndPassword(auth, email1, password1)
      .then((userCredential) => {
        const user = userCredential.user;
        // Store username in the Realtime Database
        set(ref(database, 'users/' + user.uid), {
          username: username1,
          email: email1,
          password: password1
        }).then(() => {
          window.location.href = "SignIn.html";
        });
      })
      .catch((error) => {
        const errorCode = error.code;
      const errorMessage = error.message;

      // Check for email already in use
      if (errorCode === 'auth/email-already-in-use') {
        displayMessageEmail("هذا الايميل مستخدم بالفعل");
      } else {
        alert(errorMessage); // Handle other errors
      }
    });
});

const submit2 = document.getElementById("submit2");
submit2.addEventListener("click", function(event){
    event.preventDefault();
    const username2 = document.getElementById("username2").value;
    const email2 = document.getElementById("email2").value;
    const password2 = document.getElementById("password2").value;

      // Validate inputs
  if (!validateInput(username2, email2, password2)) return;

    createUserWithEmailAndPassword(auth, email2, password2)
      .then((userCredential) => {
        const user = userCredential.user;
        // Store username in the Realtime Database
        set(ref(database, 'users/' + user.uid), {
          username: username2,
          email: email2,
          password: password2
        }).then(() => {
          window.location.href = "SignIn.html";
        });
      })
      .catch((error) => {
        const errorCode = error.code;
      const errorMessage = error.message;

      // Check for email already in use
      if (errorCode === 'auth/email-already-in-use') {
        displayMessageEmail("هذا الايميل مستخدم بالفعل");
      } else {
        alert(errorMessage); // Handle other errors
      }
    });
});
