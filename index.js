// Este código todavía no funciona, la otra alternativa es crear otro menú dentro del div con el icono
window.addEventListener("load", () => {
  const menuIcon = document.querySelector("#menu-icon");
  menuIcon.addEventListener("click", () => {
    const navList = document.querySelector(".navlist");

    /* Esto nos permite alternar clases */

    navList.classList.toggle("visible");
    navList.classList.toggle("hidden");
  });
});
