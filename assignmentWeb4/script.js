function setState(input, isOk) {
  input.classList.remove("is-valid", "is-invalid");
  input.classList.add(isOk ? "is-valid" : "is-invalid");
}

function clearStates(form) {
  form.querySelectorAll(".form-control, .form-select").forEach(function (el) {
    el.classList.remove("is-valid", "is-invalid");
  });
}

function validateFields(form) {
  var allOk = true;
  form.querySelectorAll(".form-control, .form-select").forEach(function (el) {
    var ok = el.checkValidity();   
    setState(el, ok);
    if (!ok) {
      allOk = false;
    }
  });
  return allOk;
}

document.getElementById("form1").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("HTML5 validation passed. The form is correct!");
});

var form3 = document.getElementById("form3");

form3.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateFields(form3)) {
    alert("Form sent successfully!");
    form3.reset();
    clearStates(form3);
  }
});

var regForm = document.getElementById("regForm");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var genderError = document.getElementById("genderError");
var successBox = document.getElementById("successBox");

function checkPasswordMatch() {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

function checkGender() {
  var selected = document.querySelector('input[name="gender"]:checked');
  genderError.classList.toggle("d-none", selected !== null);
  return selected !== null;
}

password.addEventListener("input", checkPasswordMatch);
confirmPassword.addEventListener("input", checkPasswordMatch);

regForm.addEventListener("submit", function (event) {
  event.preventDefault();
  successBox.classList.add("d-none");

  checkPasswordMatch();
  var fieldsOk = validateFields(regForm);
  var genderOk = checkGender();

  if (fieldsOk && genderOk) {
    var hobbies = [];
    regForm.querySelectorAll('input[type="checkbox"]:checked').forEach(function (box) {
      hobbies.push(box.value);
    });

    var text = "Registration successful! Welcome, " +
      document.getElementById("firstName").value + " " +
      document.getElementById("lastName").value + ". " +
      "Country: " + document.getElementById("country").value + ". " +
      "Hobbies: " + (hobbies.length > 0 ? hobbies.join(", ") : "none") + ".";

    successBox.textContent = text;
    successBox.classList.remove("d-none");
  }
});

regForm.addEventListener("reset", function () {
  clearStates(regForm);
  genderError.classList.add("d-none");
  successBox.classList.add("d-none");
  confirmPassword.setCustomValidity("");
});
