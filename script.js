// Part 1: Event Handling 
const msgBtn = document.getElementById("msgBtn");
const msgOutput = document.getElementById("msgOutput");

msgBtn.addEventListener("click", () => {
  msgOutput.textContent = "🎉 Button clicked! Event handling works!";
});

// Part 2: Interactive Features 

// Dark/Light Mode Toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
const countEl = document.getElementById("count");
let count = 0;

document.getElementById("increase").addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countEl.textContent = count;
});

// FAQ Section (collapsible)
const faqToggle = document.getElementById("faqToggle");
const faqContent = document.getElementById("faqContent");

faqToggle.addEventListener("click", () => {
  faqContent.classList.toggle("hidden");
});

//Part 3: Form Validation 
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form submission

  // Clear old messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formMessage").textContent = "";

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation 
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Password validation (min 6 chars)
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Success message
  if (isValid) {
    document.getElementById("formMessage").textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
