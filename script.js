// ==============================
// Part 1: Event Handling
// ==============================

let hoverMessage = document.getElementById("hoverMessage");
let clickBtn = document.getElementById("clickBtn");

hoverMessage.addEventListener("mouseover", function() {
  hoverMessage.textContent = "You hovered over me! 🎉";
});

clickBtn.addEventListener("click", function() {
  alert("Button clicked! 🚀");
});

// ==============================
// Part 2: Interactive Elements
// ==============================

// Light/Dark Mode Toggle
let themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counterValue = document.getElementById("counterValue");
let increaseBtn = document.getElementById("increaseBtn");
let resetBtn = document.getElementById("resetBtn");
let count = 0;

increaseBtn.addEventListener("click", function() {
  count++;
  counterValue.textContent = count;
});

resetBtn.addEventListener("click", function() {
  count = 0;
  counterValue.textContent = count;
});

// Collapsible FAQ
let faqQuestion = document.querySelector(".faq-question");
let faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", function() {
  if (faqAnswer.style.display === "block") {
    faqAnswer.style.display = "none";
    faqQuestion.textContent = "What is JavaScript? ▼";
  } else {
    faqAnswer.style.display = "block";
    faqQuestion.textContent = "What is JavaScript? ▲";
  }
});

// ==============================
// Part 3: Form Validation
// ==============================

let signupForm = document.getElementById("signupForm");
let nameField = document.getElementById("nameField");
let emailField = document.getElementById("emailField");
let passwordField = document.getElementById("passwordField");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let formSuccess = document.getElementById("formSuccess");

signupForm.addEventListener("submit", function(event) {
  event.preventDefault(); // stop form submission

  let valid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  // Validate Name
  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  // Validate Email with regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailField.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  }

  // Validate Password
  if (passwordField.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // If all valid
  if (valid) {
    formSuccess.textContent = "Form submitted successfully! 🎉";
    signupForm.reset();
  }
});

