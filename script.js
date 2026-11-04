const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Открыть меню");
    });
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 680 && navigation && menuButton) {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});