export const searchbar = () => {
  const searchBarContainer = document.getElementById("search-bar-container");
  const searchIcon = document.getElementById("search-icon");
  const closeSearchButton = document.getElementById("close-search");

  searchIcon.addEventListener("click", () => {
    searchBarContainer.classList.remove("hidden");
  });

  closeSearchButton.addEventListener("click", () => {
    searchBarContainer.classList.add("hidden");
  });
};
