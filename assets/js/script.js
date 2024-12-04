const form = document.querySelector("#myForm");

const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const radioGeneral = document.querySelector("#general-enquiry");
const radioSupport = document.querySelector("#support-request");
const message = document.querySelector("#message");
const termsTeam = document.querySelector("#terms-team");

const errorFisrtNameRequired = document.querySelector(".first-name-required");
const errorLastNameRequired = document.querySelector(".last-name-required");
const errorEmailInvalid = document.querySelector(".email-invalid");
const errorEmailRequired = document.querySelector(".email-required");
const errorRadioRequired = document.querySelector(".radio-required");
const errorMessageRequired = document.querySelector(".message-required");
const errorTermsRequired = document.querySelector(".terms-required");

const inputErrorMap = [
  { input: firstName, error: errorFisrtNameRequired },
  { input: lastName, error: errorLastNameRequired },
  { input: email, error: errorEmailRequired, invalid: errorEmailInvalid },
  { input: radioGeneral, error: errorRadioRequired },
  { input: radioSupport, error: errorRadioRequired },
  { input: message, error: errorMessageRequired },
  { input: termsTeam, error: errorTermsRequired },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  verifyInputsEmpty();
  console.log("teste")
});

/* FUNCTIONS */

function verifyInputsEmpty() {
  let hasError = false;

  /* Verify each input */
  inputErrorMap.forEach(({ input, error, invalid }) => {
    let isEmpty = false;
    
    if (input.type === "radio") {
      isEmpty = !radioGeneral.checked || !radioSupport.checked;
    } else if (input.type === "checkbox") {
      isEmpty = !input.checked;
    } else {
      isEmpty = input.value.trim() === "";
    }

    /* Input empty showError */
    if (isEmpty) {
      hasError = true;
      showError(input, error, invalid);
    }
  })
}

function showError(input, inputError, inputInvalid) {
  inputError.style.display = "block";
  input.classList.add("input-error");
}