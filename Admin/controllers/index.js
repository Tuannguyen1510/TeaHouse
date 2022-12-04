

var arrNhanVien = [];

document.querySelector('#btnThemNV').onclick = function () {
    var nv = new NhanVien();
    nv.code = document.querySelector("#msnv").value;
    nv.name = document.querySelector("#name").value;
    nv.email = document.querySelector("#email").value;
    nv.password = document.querySelector("#password ").value;
    // nv.date = document.querySelector("#datepicker").value;
    nv.position = document.querySelector("#chucvu").value;
    console.log(nv);


    //kiểm tra  rỗng 
    var valid = true;
    valid = validation.checkEmpty(nv.code, 'err-required-msnv', 'Mã nhân viên') 
            & validation.checkEmpty(nv.name, 'err-required-name','Tên nhân viên')
            & validation.checkEmpty(nv.email, 'err-required-email','Email nhân viên')
            & validation.checkEmpty(nv.password, 'err-required-password','Password nhân viên');

            
    //Kiểm tra ký tự
    valid &= validation.checkCharacter(nv.code, 'err-min-max-length-msnv', 'Mã nhân viên');
    valid &= validation.checkCharacter(nv.name, 'err-min-max-length-name', "Tên nhân viên");
    //kiểm tra email
    valid &= validation.checkEmail(nv.email, 'err-required-email', 'email');
    //Kiểm tra tất cả là số;
    // valid &= validation.kiemTraSo(sv.soDienThoai, 'err-number-soDienThoai', 'Số điện thoại!');
   
   
   
   
   
   
    if (!valid) {
        return;
    }

    arrNhanVien.push(nv);
    //
    renderNhanVien(arrNhanVien);
    inputLocalStorage(arrNhanVien);
}

/**
 * 
 * @param {*} arr 
 */
function renderNhanVien(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        var index = arr[i];
        content += `
            <tr>
                 <td>${index.code}</td>
                 <td>${index.name}</td>
                 <td>${index.email}</td>
            
                 <td>${index.position}</td>
                <td><button class="btn btn-success" onclick="Delete(${index.code})">Xóa</button></td>
            </tr>
        `
    }
    document.querySelector("#tableDanhSach").innerHTML = content;
}

function Delete(ma) {
    alert(ma);
    var index = -1;
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nhanvien = arrNhanVien[i];
        if (ma === nhanvien.code) {
            index = 1;
            break;
        }
    }
    arrNhanVien.splice(index, 1);
    renderNhanVien(arrNhanVien);
    inputLocalStorage();
}

// localStorage
function inputLocalStorage() {
    var input = JSON.stringify(arrNhanVien);
    // Lưu 
    localStorage.setItem('arr', input);
    // Lưu vào cookie
    setCookie('arr', input, 5)
}

function displayLocalStorage() {
    if (localStorage.getItem('arr')) {
        var display = localStorage.getItem('arr');
        arrNhanVien = JSON.parse(display);
        renderNhanVien(arrNhanVien)
    }
}
displayLocalStorage();

// update 


// --------------------------regular
// email
var rex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var email = 'email@gmail.com';
//  console.log(rex.test(email));
//  console.log(email.match(rex));


// Function  
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        " "
    );
    return str;
}