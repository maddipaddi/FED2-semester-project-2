export const rightMenu = () => {
  const menuRight = document.getElementById("menu-right");
  const openMenuRightButton = document.getElementById("open-menu-right");
  const closeMenuRightButton = document.getElementById("close-menu-right");

 
  const openMenuRight = () => {
    menuRight.classList.add("open");
    menuRight.style.transform = "translateX(0)";
  };

  const closeMenuRight = () => {
    menuRight.classList.remove("open");
    menuRight.style.transform = "translateX(100%)";
  };

  openMenuRightButton.addEventListener("click", () => {
    if (menuRight.classList.contains("open")) {
      closeMenuRight(); 
    } else {
      openMenuRight(); 
    }
  });

  closeMenuRightButton.addEventListener("click", closeMenuRight);

  document.addEventListener("click", (event) => {
    if (
      !menuRight.contains(event.target) && 
      !openMenuRightButton.contains(event.target) 
    ) {
      closeMenuRight();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenuRight();
    }
  });
};
