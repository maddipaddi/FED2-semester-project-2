export const leftMenu = () => {
  const menuLeft = document.getElementById("menu-left");
  const openMenuLeftButton = document.getElementById("open-menu-left");
  const closeMenuLeftButton = document.getElementById("close-menu-left");

  openMenuLeftButton.addEventListener("click", () => {
    menuLeft.style.transform = "translateX(0)";
  });

  closeMenuLeftButton.addEventListener("click", () => {
    menuLeft.style.transform = "translateX(-100%)";
  });
};
