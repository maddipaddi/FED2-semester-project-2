import { renderAllListings } from "../renderers/renderAllListings.mjs";

export async function renderPagination(meta) {
  const paginationControls = document.getElementById("pagination-controls");
  paginationControls.className = "flex justify-center mt-10"; 


  // Add "Previous" button
  const prevLi = document.createElement("li");
  const prevLink = document.createElement("a");
  prevLink.href = "";
  prevLink.innerHTML = `&laquo;`;
  if (meta.isFirstPage) {
    prevLink.classList.add("invisible");
    prevLink.className = "px-3 py-2 bg-primary text-background hover:font-bold rounded-md";
  } else {
    prevLink.addEventListener("click", async (e) => {
      e.preventDefault();
      await renderAllListings(meta.previousPage);
    });
  }
  prevLi.appendChild(prevLink);
  paginationControls.appendChild(prevLi);

  // Add page links
  for (let i = 1; i <= meta.pageCount; i++) {
    const pageLi = document.createElement("li");
    const pageLink = document.createElement("a");
    pageLink.href = "";
    pageLink.innerHTML = `<span class="invisible">page </span>${i}`;
    pageLink.className = "hover:font-bold text-copy dark:text-background rounded-md px-3 py-2"
    if (i === meta.currentPage) {
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

  // Add "Next" button
  const nextLi = document.createElement("li");
  const nextLink = document.createElement("a");
  nextLink.href = "";
  nextLink.innerHTML = `&raquo;`;
  nextLink.className = "px-3 py-2 ml-9 bg-primary text-background hover:font-bold rounded-md";
  if (meta.isLastPage) {
    nextLink.classList.add("invisible");
  } else {
    nextLink.addEventListener("click", async (e) => {
      e.preventDefault();
      await renderAllListings(meta.nextPage);
    });
  }
  nextLi.appendChild(nextLink);
  paginationControls.appendChild(nextLi);
}
