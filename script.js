let password = document.getElementById("password");
let strength = document.getElementById("password-strength");

function password_strength() {
  let password_input = password.innerHTML.length;
  if (password_input <= 4) {
    // change color of password strength to red
    strength.style.background = "red";
    strength.style.color = "white";
    strength.style.transition = "all 0.3s";
    strength.innerHTML = "weak";
  } else if (password_input > 4 && password_input < 8) {
    strength.style.background = "orange";
    strength.style.color = "white";
    strength.style.transition = "all 0.3s";
    strength.innerHTML = "medium";
  } else {
    strength.style.background = "green";
    strength.style.color = "white";
    strength.style.transition = "all 0.3s";
    strength.innerHTML = "strong";
  }
}

function change_on_type() {
  password.innerHTML.onkeypress = "password_strength()";
}
change_on_type(password);
