var arrUser = [];

document.querySelector("#btnDK").onclick = function (){
    var us = new  User();
    us.name = document.querySelector("#name").value;
    us.city = document.querySelector("#city").value;
    us.email = document.querySelector("#email").value;
    us.password = document.querySelector("#password ").value;
    console.log(us);

    arrUser.push(us);
    renderUser(arrUser)
}


function renderUser(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        var index = arr[i];
        content += `
            <tr>
                 <td>${i++}</td>
                 <td>${index.name}</td>
                 <td>${index.email}</td>
                 <td>${index.password}</td>
                 <td>${index.city}</td>
                 <td><button class="btn btn-success" onclick="Delete(${i++})">Xóa</button></td>
            </tr>
        `
    }
    document.querySelector("#tableDanhSach").innerHTML = '123355';
}