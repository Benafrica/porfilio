//user login
const loginform = document.getElementById("login-form");
const loginButton = document.getElementById("btnlogin");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  // console.log({email: email, password: password});
  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      // setTimeout(alert("User Loggen In "), 100);
      localStorage.setItem("accessToken", cred.user.refreshToken);
      loginform.reset();
      window.location.href = "../casptone-project/dashboard/dash.html";
    })
    .catch((err) => {
      if (err) console.error({Error: err});
      loginform.reset();
      alert("Invalid Credentials");
    });
});

//user logout

// const logout = document.querySelector("#logout");
// logout.addEventListener("click", (e) => {
//   e.preventDefault();
//   auth.signOut();
//   window.location.href =
//     "file:///C:/Users/TRUTH/Desktop/capstone%20project/index.html";
// });
