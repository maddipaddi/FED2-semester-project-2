export function closeAllElements() {
  document.addEventListener("click", (event) => {
    const menuRight = document.getElementById("menu-right");
    const openMenuRightButton = document.getElementById("open-menu-right");

    const menuLeft = document.getElementById("menu-left");
    const openMenuLeftButton = document.getElementById("open-menu-left");

    const searchBarContainer = document.getElementById("search-bar-container");
    const searchIcon = document.getElementById("search-icon");
    const searchInput = document.getElementById("search-input");

    if (
      !menuLeft.contains(event.target) &&
      !openMenuLeftButton.contains(event.target)
    ) {
      menuLeft.style.transform = "translateX(-100%)";
    }

    if (
      !menuRight.contains(event.target) &&
      !openMenuRightButton.contains(event.target)
    ) {
      menuRight.style.transform = "translateX(100%)";
    }

    if (
      searchBarContainer &&
      !searchBarContainer.contains(event.target) &&
      !searchIcon.contains(event.target)
    ) {
      searchBarContainer.classList.add("hidden");
      searchInput.value = "";
    }
  });
}
