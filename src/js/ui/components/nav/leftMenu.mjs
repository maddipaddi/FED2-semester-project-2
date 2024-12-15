export const leftMenu = () => {
  const menuLeft = document.getElementById("menu-left");
  const openMenuLeftButton = document.getElementById("open-menu-left");
  const closeMenuLeftButton = document.getElementById("close-menu-left");

  
  const openMenuLeft = () => {
    menuLeft.classList.add("open");
    menuLeft.style.transform = "translateX(0)";
  };
  
  const closeMenuLeft = () => {
    menuLeft.classList.remove("open");
    menuLeft.style.transform = "translateX(-100%)";
  };

  openMenuLeftButton.addEventListener("click", () => {
    if (menuLeft.classList.contains("open")) {
      closeMenuLeft(); 
    } else {
      openMenuLeft(); 
    }
  });

  closeMenuLeftButton.addEventListener("click", closeMenuLeft);

  document.addEventListener("click", (event) => {
    if (
      !menuLeft.contains(event.target) && 
      !openMenuLeftButton.contains(event.target) 
    ) {
      closeMenuLeft();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenuLeft();
    }
  });
};
