const cardholderName = document.getElementById("name");
const cardNumber = document.getElementById("number");
const cardExpM = document.getElementById("month");
const cardExpY = document.getElementById("year");
const cardCVC = document.getElementById("cvc");

const nameError = document.getElementById("name-error");
const ccNumError = document.getElementById("cc-error");
const expError = document.getElementById("exp-error");
const cvcError = document.getElementById("cvc-error");

function submit() {
  let errorFound = false;
  if (cardholderName.value === "") {
    nameError.style.display = "block";
    cardholderName.style.border = "1px solid var(--input-errors)";
    errorFound = true;
  } else {
    nameError.style.display = "none";
    cardholderName.style.border = "1px solid var(--l-grayish-violet)";
  }
  if (cardExpM.value === "") {
    expError.style.display = "block";
    cardExpM.style.border = "1px solid var(--input-errors)";
    errorFound = true;
  } else {
    expError.style.display = "none";
    cardExpM.style.border = "1px solid var(--l-grayish-violet)";
  }
  if (cardExpY.value === "") {
    expError.style.display = "block";
    cardExpY.style.border = "1px solid var(--input-errors)";
    errorFound = true;
  } else {
    expError.style.display = "none";
    cardExpY.style.border = "1px solid var(--l-grayish-violet)";
  }
  if (cardCVC.value === "") {
    cvcError.style.display = "block";
    cardCVC.style.border = "1px solid var(--input-errors)";
    errorFound = true;
  } else {
    cvcError.style.display = "none";
    cardCVC.style.border = "1px solid var(--l-grayish-violet)";
  }
  const cardNumberRegex = /^[0-9]*$/;
  if ((!cardNumberRegex.test(cardNumber.value), cardNumber.value === "")) {
    ccNumError.style.display = "block";
    cardNumber.style.border = "1px solid var(--input-errors)";
    errorFound = true;
  } else {
    ccNumError.style.display = "none";
    cardNumber.style.border = "1px solid var(--l-grayish-violet)";
  }

  if (!errorFound) {
    ccOutput();
    ccAdded();
  }
}

const ccImageNum = document.getElementById("card-number");
const ccImageName = document.getElementById("card-holder-id");
const ccImageExp = document.getElementById("card-exp");
const ccImageCVC = document.getElementById("cv-number");

function ccOutput() {
  ccImageName.innerHTML = cardholderName.value;
  ccImageNum.innerHTML = cardNumber.value;
  ccImageExp.innerHTML = cardExpM.value + "/" + cardExpY.value;
  ccImageCVC.innerHTML = cardCVC.value;

  if (cardNumber.value === "") {
    ccImageNum.innerHTML = "0000 0000 0000 0000";
  } else {
    ccImageNum.innerHTML = cardNumber.value;
  }
  if (cardholderName.value === "") {
    ccImageName.innerHTML = "jake appleseed";
  } else {
    ccImageName.innerHTML = cardholderName.value;
  }
  if (cardCVC.value === "") {
    ccImageCVC.innerHTML = "000";
  } else {
    ccImageCVC.innerHTML = cardCVC.value;
  }
  if ((cardExpM.value === "", cardExpY.value === "")) {
    ccImageExp.innerHTML = "00/00";
  } else {
    ccImageExp.innerHTML = cardExpM.value + "/" + cardExpY.value;
  }
}

function ccAdded() {
  const formDiv = document.getElementById("form");
  const formContent = document.getElementById("form-content");

  const completeContainer = document.createElement("div");
  completeContainer.className =
    "complete-container d-flex justify-content-center align-items-center flex-column text-center";

  completeContainer.id = "completeContainer";

  const img = document.createElement("img");
  img.style.width = "20%";
  img.src = "images/icon-complete.svg";
  completeContainer.appendChild(img);

  const h2 = document.createElement("h2");
  h2.className = "mt-4";
  h2.innerText = "THANK YOU!";
  completeContainer.appendChild(h2);

  const p = document.createElement("p");
  p.style.color = "var(--d-grayish-violet)";
  p.innerText = "We've added your card details";
  completeContainer.appendChild(p);

  const button = document.createElement("button");
  button.className = "mt-4 btnn";
  button.innerText = "Continue";
  button.onclick = continueBtn;
  completeContainer.appendChild(button);

  formDiv.appendChild(completeContainer);
  formContent.style.display = "none";
}

function continueBtn() {
  const formContent = document.getElementById("form-content");
  const completedContainer = document.getElementById("completeContainer");

  formContent.parentNode.removeChild(completedContainer);
  formContent.style.display = "block";

  if (ccImageNum !== "" && ccImageCVC.value !== "" && ccImageExp.value !== "") {
    ccImageNum.innerHTML = "0000 0000 0000 0000";
    ccImageCVC.innerHTML = "000";
    ccImageExp.innerHTML = "00/00";
    ccImageName.innerHTML = "jake appleseed";
  } else {
    ccImageNum.innerHTML = cardNumber.value;
    ccImageCVC.innerHTML = cardCVC.value;
    ccImageExp.innerHTML = cardExpM.value + "/" + cardExpY.value;
    ccImageName.innerHTML = cardholderName.value;
  }
}

//  CREDIT CARD FORMAT

const cardInput = document.getElementById("number");

cardInput.addEventListener("input", (e) => {
  const cardNumber = e.target.value.replace(/\D/g, "");

  const formattedNumber = cardNumber.replace(/(\d{4})/g, "$1 ").trim();

  e.target.value = formattedNumber;
});
