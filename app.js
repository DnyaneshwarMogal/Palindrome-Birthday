const alertCloseIcon = document.querySelector("#crossIcon");
const alertBoxDiv = document.querySelector("#alertBox");

alertCloseIcon.addEventListener("click", (e) => {
  alertBoxDiv.style.display = "none";
});
