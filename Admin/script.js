const firebaseConfig = {
  apiKey: "AIzaSyAtxTTq-xOO_Y2_viJ7Bypo5QVpVCiSiEA",
  authDomain: "your-broker-2b8a1.firebaseapp.com",
  databaseURL: "https://your-broker-2b8a1-default-rtdb.firebaseio.com",
  projectId: "your-broker-2b8a1",
  storageBucket: "your-broker-2b8a1.appspot.com",
  messagingSenderId: "1004261960328",
  appId: "1:1004261960328:web:0ea87aeb97302876cc4d3d",
  measurementId: "G-SF2SM5CSL8",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.location.href = "admin.html";
        // auth.signOut();
        // $("#error-message").text("ليس لديك صلاحيات الدخول.");
      })
      .catch((error) => {
        $("#error-message").text("خطأ في تسجيل الدخول: " + error.message);
      });
  });

  //   $("#logout").click(function () {
  //     auth.signOut().then(() => {
  //       window.location.href = "index.html";
  //     });
  //   });
});
