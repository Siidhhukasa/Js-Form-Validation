function formvalidation() {
  var user = document.getElementById("name").value;
  var emailid = document.getElementById("email").value;
  var mobile = document.getElementById("number").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;

  if (user == "") {
    document.getElementById("nameerror").innerHTML =
      "* user name cannot be empty";
    return false;
  } else {
    document.getElementById("nameerror").innerHTML = "";
  }

  if (user.length < 5 || user.length > 30) {
    document.getElementById("nameerror").innerHTML =
      "*please enter valid user name( in between 5 to 30 characters)";
    return false;
  } else {
    document.getElementById("nameerror").innerHTML = "";
  }

  if (!isNaN(user)) {
    document.getElementById("nameerror").innerHTML =
      "*user name cannot be a number";
    return false;
  } else {
    document.getElementById("nameerror").innerHTML = "";
  }

  if (emailid == "") {
    document.getElementById("emailerror").innerHTML =
      "*email id canno be empty";
    return false;
  } else {
    document.getElementById("emailerror").innerHTML = "";
  }

  if (emailid.indexOf("@") <= 0) {
    document.getElementById("emailerror").innerHTML = "*enter valid email id";
    return false;
  } else {
    document.getElementById("emailerror").innerHTML = "";
  }

  if (
    emailid.charAt(emailid.length - 4) != "." &&
    emailid.charAt(emailid.length - 3) != "."
  ) {
    document.getElementById("emailerror").innerHTML = "*enter valid email id";
    return false;
  } else {
    document.getElementById("emailerror").innerHTML = "";
  }

  if (mobile == "") {
    document.getElementById("numerror").innerHTML =
      "*mobile number cannot be empty";
    return false;
  } else {
    document.getElementById("numerror").innerHTML = "";
  }

  if (mobile.length != 10 || mobile == "1234567890" || mobile == "0123456789") {
    document.getElementById("numerror").innerHTML =
      "*Enter a valid 10 digit mobile";
    return false;
  } else {
    document.getElementById("numerror").innerHTML = "";
  }

  if (isNaN(mobile)) {
    document.getElementById("numerror").innerHTML =
      "*mobile number should contain only digits";
    return false;
  } else {
    document.getElementById("numerror").innerHTML = "";
  }

  if (password == "") {
    document.getElementById("passerror").innerHTML =
      "*password cannot be empty";
    return false;
  } else {
    document.getElementById("passerror").innerHTML = "";
  }

  if (password.length < 8 || password.length > 20) {
    document.getElementById("passerror").innerHTML =
      "*password must be between 8 to 20 characters";
    return false;
  } else {
    document.getElementById("passerror").innerHTML = "";
  }

  if (password === user) {
    document.getElementById("passerror").innerHTML = "*password is too weak";
    return false;
  } else {
    document.getElementById("passerror").innerHTML = "";
  }

  if (
    password == "password" ||
    password == "Password" ||
    password == "PASSWORD"
  ) {
    document.getElementById("passerror").innerHTML = "*password is too weak";
    return false;
  } else {
    document.getElementById("passerror").innerHTML = "";
  }

  if (cpassword == "") {
    document.getElementById("cpasserror").innerHTML =
      "*please confirm the password";
    return false;
  } else {
    document.getElementById("cpasserror").innerHTML = "";
  }

  if (cpassword != password) {
    document.getElementById("cpasserror").innerHTML =
      "*password is not matching";
    return false;
  } else {
    document.getElementById("cpasserror").innerHTML = "";
  }
}

function clr() {
  document.getElementById("nameerror").innerHTML = "";
  document.getElementById("emailerror").innerHTML = "";
  document.getElementById("numerror").innerHTML = "";
  document.getElementById("passerror").innerHTML = "";
  document.getElementById("cpasserror").innerHTML = "";
}
