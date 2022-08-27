let password = document.getElementById("password");
//let strength = document.getElementById("password").value;
let pass_strength = document.getElementById("password-strength");

function password_strength(strength) {
  let len = strength.length;
  pass_strength.style.transition = "all 0.3s";
  if (len <= 4) {
    pass_strength.style.background = "red";
    pass_strength.style.color = "white";
    pass_strength.innerHTML = "weak";
  } else if (len > 4 && len < 8) {
    pass_strength.style.background = "orange";
    pass_strength.style.color = "white";
    pass_strength.innerHTML = "medium";
  } else {
    pass_strength.style.background = "green";
    pass_strength.style.color = "white";
    pass_strength.innerHTML = "strong";
  }
}

// password.addEventListener("keyup", function () {
//   let strength = password.value;
//   password_strength(strength);
// });

// tick mark
const letter = document.querySelector(".letter i");
const number = document.querySelector(".number i");
const character = document.querySelector(".character i");
const size = document.querySelector(".size i");
function check_strength() {
  let ans = password.value;

  //letters
  if (ans.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    letter.classList.remove("fa-circle");
    letter.classList.add("fa-check");
  } else {
    letter.classList.remove("fa-check");
    letter.classList.add("fa-circle");
  }

  //numbers
  if (ans.match(/([0-9])/)) {
    number.classList.remove("fa-circle");
    number.classList.add("fa-check");
  } else {
    number.classList.remove("fa-check");
    number.classList.add("fa-circle");
  }

  //special characters
  if (ans.match(/([!,@,#,$,%,^,&,*])/)) {
    character.classList.remove("fa-circle");
    character.classList.add("fa-check");
  } else {
    character.classList.remove("fa-check");
    character.classList.add("fa-circle");
  }

  //length
  if (ans.length >= 8) {
    size.classList.remove("fa-circle");
    size.classList.add("fa-check");
  } else {
    size.classList.remove("fa-check");
    size.classList.add("fa-circle");
  }
}

password.addEventListener("keyup", function () {
  let strength = password.value;
  check_strength();
  password_strength(strength);
});
