import { timeAgo } from "../../utilities/bidMadeTimeAgo.mjs";

function createBidElement(bid) {
  const bidElement = document.createElement("div");
  bidElement.classList.add(
    "grid",           
    "grid-cols-3",    
    "gap-4",          
    "py-2",           
    "border-b",       
    "border-gray-200",
    "last:border-b-0" 
  );

  const bidderName = document.createElement("span");
  bidderName.innerText = bid.bidder.name;
  bidderName.classList.add(
    "font-medium",
    "text-background",
    "truncate" 
  );

  const bidTime = document.createElement("span");
  bidTime.innerText = timeAgo(bid.created);
  bidTime.classList.add(
    "text-sm",
    "text-gray-300",
    "text-center" 
  );

  const bidAmount = document.createElement("span");
  bidAmount.innerText = `$${bid.amount}`;
  bidAmount.classList.add(
    "font-bold",
    "text-background",
    "text-right" 
  );

  bidElement.append(bidderName, bidTime, bidAmount);

  return bidElement;
}

function renderAllBids(bids) {
  const bidContainer = document.getElementById("bid-list");
  bidContainer.innerHTML = ""; 

  bids.forEach((bid) => {
    const bidElement = createBidElement(bid); 
    bidContainer.appendChild(bidElement);
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "text-primary mt-2";

  const collapseButton = document.createElement("button");
  collapseButton.innerText = "Collapse to top 3";
  collapseButton.classList.add(
    "bg-background",
    "text-primary",
    "py-2",
    "px-4",
    "rounded",
    "hover:font-bold",
    "transition",
    "duration-200"
  );
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
  bidContainer.innerHTML = ""; 

  const topBids = sortedBids.slice(0, 3);

  topBids.forEach((bid) => {
    const bidElement = createBidElement(bid); 
    bidContainer.appendChild(bidElement);
  });

  if (sortedBids.length > 3) {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "text-primary mt-2";
  
    const seeAllBidsButton = document.createElement("button");
    seeAllBidsButton.innerText = `See all bids (${sortedBids.length})`;
    seeAllBidsButton.classList.add(
      "bg-background",
      "text-primary",
      "py-2",
      "px-4",
      "rounded",
      "hover:font-bold",
      "transition",
      "duration-200"
    );
    seeAllBidsButton.addEventListener("click", (event) => {
      event.preventDefault();
      renderAllBids(sortedBids);
    });
  
    buttonContainer.appendChild(seeAllBidsButton);
    bidContainer.appendChild(buttonContainer);
  }
}  