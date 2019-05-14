var submit = document.getElementById("submit");
var clear = document.getElementById("clear");

function validform() {

    var a = document.forms["my-form"]["name"].value;
    var b = document.forms["my-form"]["email-address"].value;
    var c = document.forms["my-form"]["nickname"].value;
    var d = document.forms["my-form"]["password"].value;
    var e = document.forms["my-form"]["photo-url"].value;

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

submit.onclick = function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email_address").value;
    var nickName = document.getElementById("nick_name").value;
    var password = document.getElementById("password").value;
    var photoUrl = document.getElementById("photo_url").value;
    var goals = document.getElementById("goals_list").value;
}

clear.onclick = function() {
    document.getElementById("name").value = "";
    document.getElementById("email_address").value = "";
    document.getElementById("nick_name").value = "";
    document.getElementById("password").value = "";
    document.getElementById("photo_url").value = "";
    document.getElementById("goals_list").value = "";
}