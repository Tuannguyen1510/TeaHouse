let username = document.getElementById("name");
let city = document.getElementById("city");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnSignup = document.querySelector("#btnDK");
let btnLogin = document.querySelector("#btnDN");

btnSignup.addEventListener("click", (e) => {
  e.preventDefault();
  let user = {
    // username: username.value,
    // city: city.value,
    email: email.value,
    password: password.value,
  };
  let json = JSON.stringify(user);
  if ( !email.value || !password.value) {
    alert("Vui long nhap day du thong tin");
  } else {
    localStorage.setItem(email.value, json);
    alert("dang ky thanh cong");
  }
});

