import { renderAllListings } from "../renderers/renderAllListings.mjs";

export async function renderPagination(meta) {
  const paginationControls = document.getElementById("pagination-controls");

  if (!paginationControls.classList.contains("flex")) {
    paginationControls.className = "flex justify-center mt-10 gap-3 list-none";
  }


  paginationControls.innerHTML = "";

  const prevLi = document.createElement("li");
  const prevLink = document.createElement("a");
  prevLink.href = "";
  prevLink.innerHTML = `&laquo;`;
  prevLink.className = "px-3 py-2 bg-primary text-background hover:font-bold rounded-md";
  if (meta.isFirstPage) {
    prevLink.classList.add("opacity-80", "cursor-not-allowed");
    prevLink.addEventListener("click", (e) => e.preventDefault());
  } else {
    prevLink.addEventListener("click", async (e) => {
      e.preventDefault();
      await renderAllListings(meta.previousPage);
    });
  }
  prevLi.appendChild(prevLink);
  paginationControls.appendChild(prevLi);

  for (let i = 1; i <= meta.pageCount; i++) {
    const pageLi = document.createElement("li");
    const pageLink = document.createElement("a");
    pageLink.href = "";
    pageLink.innerHTML = `<span class="sr-only">page </span>${i}`;
    pageLink.className = `
      hover:font-bold 
      text-copy 
      dark:text-background 
      rounded-md 
      px-3 
      py-2 
      border 
      border-gray-300 
      dark:border-gray-300 
      transition-colors 
      opacity-80
    `;
    if (i === meta.currentPage) {
      pageLink.classList.add(
        "border-2", 
        "border-primary", 
        "dark:border-white",
        "text-primary", 
        "dark:text-white", 
        "font-bold",
        "opacity-100" 
      );
      pageLink.setAttribute("aria-current", "page");
    } else {
      pageLink.addEventListener("click", async (e) => {
        e.preventDefault();
        await renderAllListings(i);
      });
    }
    pageLi.appendChild(pageLink);
    paginationControls.appendChild(pageLi);
  }

  const nextLi = document.createElement("li");
  const nextLink = document.createElement("a");
  nextLink.href = "";
  nextLink.innerHTML = `&raquo;`;
  nextLink.className = "px-3 py-2 bg-primary text-background hover:font-bold rounded-md";
  if (meta.isLastPage) {
    nextLink.classList.add("opacity-50", "cursor-not-allowed");
    nextLink.addEventListener("click", (e) => e.preventDefault());
  } else {
    nextLink.addEventListener("click", async (e) => {
      e.preventDefault();
      await renderAllListings(meta.nextPage);
    });
  }
  nextLi.appendChild(nextLink);
  paginationControls.appendChild(nextLi);
}
