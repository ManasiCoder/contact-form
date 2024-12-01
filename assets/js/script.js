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
  { input: email, error: errorEmailRequired },
  { input: radioGeneral, error: errorRadioRequired },
  { input: radioSupport, error: errorRadioRequired },
  { input: message, error: errorMessageRequired },
  { input: termsTeam, error: errorTermsRequired },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  verifyInputsEmpty();
})

function verifyInputsEmpty() {
  let hasError = false;

  inputErrorMap.forEach(({ input, error }) => {
    const isEmpty = input.value.trim() === "" || !isAnyRadioSelected();

    if (isEmpty) {
      hasError = true;
      showError(error);
      input.classList.add("input-error");
    }
  })

  if (!hasError) {
    console.log("Success")
  }
}

function isAnyRadioSelected() {
  return radioGeneral.checked || radioSupport.checked
}

function termChecked() {
  return termsTeam.checked;
}

function showError(elementError) {
  elementError.style.display = "block";
}

function hideError(elementError) {
  elementError.style.display = "none";
}

