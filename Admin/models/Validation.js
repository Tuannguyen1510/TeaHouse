var validation =  {
   checkEmpty: function(value , errId , name){
       if(value.trim() === ""){
        document.getElementById(errId).style.display ="block";
        document.getElementById(errId).innerHTML = `${name} không được bỏ trống! `
        return false;
       }
       document.getElementById(errId).style.display = 'none';
       return true;
   },
   checkCharacter: function (value,errId,name) {
    var regexLetter = /^[A-Z a-z]+$/;
    if(regexLetter.test(value)){
        document.getElementById(errId).style.display='none';
        return true;
    }

    document.getElementById(errId).style.display='block';
    document.getElementById(errId).innerHTML = `${name} phải là ký tự!`;
    return false;
},
checkEmail: function(value, errId,name) {
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regexEmail.test(value)){
        document.getElementById(errId).style.display = 'none';
        return true;
    }
    document.getElementById(errId).style.display = 'block';
    document.getElementById(errId).innerHTML = 'email không hợp lệ!';
    return false;
},
checkNumber: function(value,errId,name) {
    var regexNumber = /^[0-9]+$/;
    if(regexNumber.test(value)){
        document.getElementById(errId).style.display = 'none';
        return true;
    }
    document.getElementById(errId).style.display = 'block';
    document.getElementById(errId).innerHTML = `${name} yêu cầu nhập số!`;
    return false;
},
}