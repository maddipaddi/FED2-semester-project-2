import { router } from "../router/router.mjs";

export function onSearchListener() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); 

      const searchTerm = searchInput.value.trim();

      if (searchTerm) {
        router.route(`/listings/search?q=${encodeURIComponent(searchTerm)}`);
      }
    }
  });
}
