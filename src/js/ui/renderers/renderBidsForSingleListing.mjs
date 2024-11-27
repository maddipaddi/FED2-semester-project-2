import { timeAgo } from "../../utilities/bidMadeTimeAgo.mjs";

function renderAllBids(bids) {
  const bidContainer = document.getElementById("bid-list");
  bidContainer.innerHTML = ""; // Clear existing bids

  bids.forEach((bid) => {
    const bidElement = document.createElement("p");
    bidElement.innerText = `${bid.bidder.name} - ${timeAgo(
      bid.created
    )} $${bid.amount}`;
    bidContainer.appendChild(bidElement);
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "text-blue-200 mt-2";
  const collapseButton = document.createElement("button");
  collapseButton.innerText = "Collapse to top 3";
  collapseButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderBids(bids);
  });
  buttonContainer.appendChild(collapseButton);
  bidContainer.appendChild(buttonContainer);
}

export function renderBids(bids) {
  const sortedBids = bids.sort(
    (a, b) => new Date(b.created) - new Date(a.created)
  );

  const bidContainer = document.getElementById("bid-list");
  bidContainer.innerHTML = ""; // Clear existing bids

  const topBids = sortedBids.slice(0, 3);

  topBids.forEach((bid) => {
    const bidElement = document.createElement("p");
    bidElement.innerText = `${bid.bidder.name} - ${timeAgo(
      bid.created
    )} - $${bid.amount}`;
    bidContainer.appendChild(bidElement);
  });

  if (sortedBids.length > 3) {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "text-blue-200 mt-2";
    const seeAllBidsButton = document.createElement("button");
    seeAllBidsButton.innerText = `See all bids (${sortedBids.length})`;
    seeAllBidsButton.addEventListener("click", (event) => {
      event.preventDefault();
      renderAllBids(sortedBids);
    });
    buttonContainer.appendChild(seeAllBidsButton);
    bidContainer.appendChild(buttonContainer);
  }
}
