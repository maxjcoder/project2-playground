function validform() {

    var a = document.forms["my-form"]["name"].value;
    var b = document.forms["my-form"]["email-address"].value;
    var c = document.forms["my-form"]["nickname"].value;
    var d = document.forms["my-form"]["photo-url"].value;

    if (a == null || a == "") {
        alert("Please Enter Your Name");
        return false;
    } else if (b == null || b == "") {
        alert("Please Enter Your Email Address");
        return false;
    } else if (c == null || c == "") {
        alert("Please Enter Your Nickname");
        return false;
    } else if (d == null || d == "") {
        alert("Please Enter Your Password");
        return false;
    } else if (e == null || e == "") {
        alert("Please Enter Your Photo URL");
        return false;
    }

}