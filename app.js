/* Menu Dispositivos moveis  */
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

/* validar form const */
const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#mensagem");
const success = document.querySelector("#success");
const error = document.querySelectorAll(".error");

// Validar formulario
function validarForm() {
  clearmMessages();
  if (nameInput.value.lenght < 1) {
    errorNodes[0].innerText = "Nome é obrigatório";
    nameInput.classList.add("error-border");
  }
}
