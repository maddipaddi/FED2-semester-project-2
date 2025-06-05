import { timeAgo } from "../../utilities/bidMadeTimeAgo.mjs";

function createBidElement(bid) {
  const bidElement = document.createElement("div");
  bidElement.classList.add("grid", "grid-cols-3", "gap-4", "py-2", "border-b", "border-gray-200", "last:border-b-0");

  const bidderName = document.createElement("span");
  bidderName.innerText = bid.bidder.name;
  bidderName.classList.add("font-medium", "text-background", "truncate");

  const bidTime = document.createElement("span");
  bidTime.innerText = timeAgo(bid.created);
  bidTime.classList.add("text-sm", "text-gray-300", "text-center");

  const bidAmount = document.createElement("span");
  bidAmount.innerText = `$${bid.amount}`;
  bidAmount.classList.add("font-bold", "text-background", "text-right");

  bidElement.append(bidderName, bidTime, bidAmount);
  return bidElement;
}

function createButton(text, onClick) {
  const button = document.createElement("button");
  button.innerText = text;
  button.classList.add("bg-background", "text-primary", "py-2", "px-4", "rounded", "hover:font-bold", "transition", "duration-200");
  button.addEventListener("click", onClick);
  return button;
}

function renderBidList(bids) {
  const bidContainer = document.getElementById("bid-list");
  bidContainer.innerHTML = "";
  bids.forEach((bid) => bidContainer.appendChild(createBidElement(bid)));
}

function addToggleButton(text, onClick) {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "text-primary mt-2";
  const button = createButton(text, onClick);
  buttonContainer.appendChild(button);
  document.getElementById("bid-list").appendChild(buttonContainer);
}

export function renderAllBids(bids) {
  renderBidList(bids);
  addToggleButton("Collapse to top 3", () => renderBids(bids));
}

export function renderBids(bids) {
  const sortedBids = [...bids].sort((a, b) => new Date(b.created) - new Date(a.created));
  const topBids = sortedBids.slice(0, 3);

  renderBidList(topBids);

  if (sortedBids.length > 3) {
    addToggleButton(`See all bids (${sortedBids.length})`, () => renderAllBids(sortedBids));
  }
}
