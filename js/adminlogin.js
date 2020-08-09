function validate() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;
    if (username == "admin" && password == "admin") {
        alert("Login successfully");
        return false;
    }
    else {
        alert("Wrong Username or Password");
    }
}

function show() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}