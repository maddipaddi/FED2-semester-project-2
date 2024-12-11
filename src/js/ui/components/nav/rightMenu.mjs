export const rightMenu = () => {
  const menuRight = document.getElementById("menu-right");
  const openMenuRightButton = document.getElementById("open-menu-right");
  const closeMenuRightButton = document.getElementById("close-menu-right");

  openMenuRightButton.addEventListener("click", () => {
    menuRight.style.transform = "translateX(0)";
  });

  closeMenuRightButton.addEventListener("click", () => {
    menuRight.style.transform = "translateX(100%)";
  });
};
