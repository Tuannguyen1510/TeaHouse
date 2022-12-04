let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.querySelector("#btnDN");
let btnDangXuat = document.querySelector("#dangxuat")

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    let user = {
      email: email.value,
      password: password.value,
    };
    console.log(user);
    if(user.email === 'admin' && user.password === '12345'){
      window.location.href = "../Admin/admin.html";
    }else{
      let json = JSON.stringify(user);
      if ( !email.value || !password.value) {
        alert("vui long nhap day du thong tin");
      }
      if (localStorage.getItem(email.value) == json) {
        alert("dang nhap thanh cong");
        window.location.href = "header.html";
      } else {
        alert("dang nhap that bai");
      }
    }
  });
  

  // btnDangXuat.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   window.location.href = "SignUp.html";
  // }); 