import { renderAllListings } from "../renderers/renderAllListings.mjs";

export async function renderPagination(meta) {
  const paginationControls = document.getElementById("pagination-controls");

  // Clear previous pagination links
  paginationControls.innerHTML = "";

  // Add "Previous" button
  const prevLi = document.createElement("li");
  const prevLink = document.createElement("a");
  prevLink.href = "";
  prevLink.innerHTML = `&laquo;`;
  if (meta.isFirstPage) {
    prevLink.classList.add("invisible");
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
