// initialize variables for necessary data
const form = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
// const userList = document.querySelector("#users");
const userList = document.querySelector("#users-table");

form.addEventListener("submit", onSubmit); // form submission handler

// function for handling user inputs when the form is submitted
function onSubmit(e) {
  e.preventDefault(); // this prevents default page reloads when the form is being submitted
  // access user name and email from input fields
  const userName = nameInput.value;
  const userEmail = emailInput.value;

  // validation for empty input fields
  if (userName === "" || userEmail === "") {
    msg.textContent = "Please add info";
    msg.classList.add("error");
    return; // stops form submission if form has empty inputs
  } else {
    msg.innerHTML = "";
    msg.classList.remove("error");
  }

  // create a list item using name and email inputs
  /*   const li = document.createElement("li");
  li.classList.add("item");
  li.innerHTML = `<li>Name: ${userName},,,,, Email: ${userEmail}`;
  userList.appendChild(li); */

  // add item to the table
  userList.style.display = "block";
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${userName}</td><td>${userEmail}</td>`;
  userList.appendChild(tr);

  // clear input field after submission
  clearInputs();
}

// function to clear input fields
function clearInputs() {
  const inputs = document.querySelectorAll("input[type='text'");
  inputs.forEach(function (input) {
    input.value = "";
  });
}
