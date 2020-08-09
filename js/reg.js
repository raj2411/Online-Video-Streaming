function verify() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var repass = document.getElementById("repass").value;
    var gen = document.getElementById("gen").value;
    var dob = document.getElementById("dob").value;
    var flag = 1;
    if (fname == null) {
        alert("Please fill First Name");
        flag = 0;
    }

    if (lname == null) {
        alert("Please fill Last Name");
        flag = 0;
    }

    if (email == null) {
        alert("Please fill Email");
        flag = 0;
    }

    if (pass == null) {
        alert("Please fill password");
        flag = 0;
    }

    if (pass != repass) {
        alert("Passwords Not matched");
        flag = 0;
    }

    var d = '1/1/2002'
    d = new Date(d);
    if (dob >= d) {
        alert("Opps Age is less than 18");
        flag = 0;
    }

    if (flag == 1) {
        var s = "Registered Successfully" + "\n";
        s += "First Name : " + fname + "\n";
        s += "Last Name : " + lname + "\n";
        s += "Email : " + email + "\n";
        s += "Date Of Birth : " + dob + "\n";
        s += "Now U Can Go to login page ";
        alert(s);
    }

}