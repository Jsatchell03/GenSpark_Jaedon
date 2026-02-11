const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const fName = document.getElementById("fname").value;
  const lName = document.getElementById("lname").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  const password = document.getElementById("password").value;
  const paswordRetype = document.getElementById("retype-password").value;

  if (!/^[a-z ,.'-]+$/i.test(fName)) {
    alert("Invalid First Name");
    return;
  }
  if (!/^[a-z ,.'-]+$/i.test(lName)) {
    alert("Invalid Last Name");
    return;
  }
  if (!/^[a-z0-9._-]+$/i.test(username)) {
    alert("Invalid Username");
    return;
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    alert("Invalid Email");
    return;
  }
  if (gender == "unselected") {
    alert("No Gender Selected");
    return;
  }
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
    alert("Invalid Password");
    return;
  }
  if (password !== paswordRetype) {
    alert("Passwords Do Not Match");
    return;
  }
  alert("Registration Successful");
});
