var form = document.getElementById("regForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;

  var valid = true;

  // clear old messages
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmError").innerText = "";
  document.getElementById("success").innerText = "";

  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    valid = false;
  }

  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Enter a valid email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
    valid = false;
  }

  if (confirm !== password) {
    document.getElementById("confirmError").innerText = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    document.getElementById("success").innerText = "Registration successful!";
    form.reset();
  }
});