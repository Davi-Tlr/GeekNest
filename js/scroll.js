/*=============== MOSTRAR O SCROLL DA SUBIDA===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //Quando o Scroll for maior que 350 altura da viewport
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);