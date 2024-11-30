const form = document.querySelector("#myForm");

const inputFirstName = document.querySelector("#first-name");
const inputLastName = document.querySelector("#last-name");
const inputEmail = document.querySelector("#email");
const inputRadioGeneralEquiry = document.querySelector("#general-enquiry");
const inputRadioSupportRequest = document.querySelector("#support-request");
const textareaMessage = document.querySelector("#message");
const checkTermsTeam = document.querySelector("#terms-team");

const errorFisrtNameRequired = document.querySelector(".first-name-required");
const errorLastNameRequired = document.querySelector(".last-name-required");
const errorEmailInvalid = document.querySelector(".email-invalid");
const errorEmailRequired = document.querySelector(".email-required");
const errorRadioRequired = document.querySelector(".radio-required");
const errorMessageRequired = document.querySelector(".message-required");
const errorTermsRequired = document.querySelector(".terms-required");

const allInputs = [
  inputFirstName,
  inputLastName,
  inputEmail,
  inputRadioGeneralEquiry,
  inputRadioSupportRequest,
  textareaMessage
]

console.log(inputFirstName.value)

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("funcionou")

  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value.trim() == "") {
      console.log(allInputs[i])
      showErrorRequired(errorFisrtNameRequired);
    }
  }

  setTimeout(() => {

  }, 2000);

  if (!hasError) {
    
  }
});

function showErrorRequired (element) {
  element.style.display = 'block';
}

function hideError(element) {
  element.style.display = "none";
}