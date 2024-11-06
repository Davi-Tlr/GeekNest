/*================= LOGIN =================*/
const loginButton = document.getElementById("login-button");
const loginClose = document.getElementById("login-close");
const loginContent = document.getElementById("login-content");
/*================= LOGIN MOSTRAR =================*/
/*Valida se a constante existe*/
if (loginButton) {
  loginButton.addEventListener("click", () => {
    loginContent.classList.add("show-login");
  });
}
/*================= LOGIN ESCONDER =================*/
/*Valida se a constante existe*/
if (loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}