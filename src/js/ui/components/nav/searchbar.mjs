export const searchbar = () => {
  const searchBarContainer = document.getElementById("search-bar-container");
  const searchIcon = document.getElementById("search-icon");
  const closeSearchButton = document.getElementById("close-search");
  const searchInput = document.getElementById("search-input");

  searchIcon.addEventListener("click", () => {
    searchBarContainer.classList.remove("hidden");
  });

  closeSearchButton.addEventListener("click", () => {
    searchInput.value = "";
    searchBarContainer.classList.add("hidden");
  });
};
