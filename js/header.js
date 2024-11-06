/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Adiciona a classe show-menu ao menu de navegação
    nav.classList.toggle("show-menu");

    // Adiciona o show-icon para mostrar e ocultar o ícone do menu
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

/*============= CHANGE BACKGROUND HEADER ===============*/