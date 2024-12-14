import { router } from "../router/router.mjs";

export function onSearchListener() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("keydown", (event) => {
    // Check if the Enter key is pressed
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission

      const searchTerm = searchInput.value.trim();

      if (searchTerm) {
        // Redirect to the listings page with the search term as a query parameter
        router.route(`/listings/search?q=${encodeURIComponent(searchTerm)}`);
      }
    }
  });
}
