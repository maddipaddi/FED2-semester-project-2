import { displayMedia } from "../../utilities/displayFirstImageOnListing.mjs";
import { formatDateWithDate } from "../../utilities/formatDate.mjs";
import { getHighestBid } from "../../utilities/getHighestBid.mjs";

export function displayListings(listings) {
  return listings.map(createListingCard);
}

function createListingCard(listing) {
  const container = createElement("div", {
    classList: [
      "bg-white", "shadow", "rounded-lg", "p-4", "flex", "flex-col", "justify-between"
    ]
  });

  const imgLink = createElement("a", {
    href: `/listing/read?id=${listing.id}`,
    children: [displayMedia(listing)]
  });

  const sellerAndEnding = createSellerAndEnding(listing);
  const bidAndButton = createBidAndButton(listing);

  container.append(imgLink, sellerAndEnding, bidAndButton);
  return container;
}

function createSellerAndEnding(listing) {
  return createElement("div", {
    classList: ["flex", "justify-between", "items-center", "mb-2"],
    children: [
      createElement("a", {
        href: `/profile/read?user=${listing.seller.name}`,
        innerText: listing.seller.name,
        classList: ["text-sm", "font-medium", "text-gray-700", "hover:font-bold"]
      }),
      createElement("p", {
        innerText: `${new Date(listing.endsAt) > new Date() ? "Ending" : "Ended"}: ${formatDateWithDate(listing.endsAt)}`,
        classList: ["text-sm", "text-gray-500"]
      })
    ]
  });
}

function createBidAndButton(listing) {
  return createElement("div", {
    classList: ["flex", "justify-between", "items-center", "gap-4", "mt-2"],
    children: [
      createElement("p", {
        innerText: `Current bid: ${getHighestBid(listing.bids)}`,
        classList: ["text-sm", "font-bold", "text-gray-800"]
      }),
      createElement("a", {
        href: `/listing/read?id=${listing.id}`,
        innerText: "Bid",
        classList: [
          "bg-accent", "text-white", "text-sm", "py-2", "px-4",
          "rounded-md", "text-center", "hover:font-bold", "uppercase"
        ]
      })
    ]
  });
}

function createElement(tag, { innerText = "", classList = [], children = [], ...attrs }) {
  const el = document.createElement(tag);
  if (innerText) el.innerText = innerText;
  if (classList.length) el.classList.add(...classList);
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
  children.forEach(child => el.appendChild(child));
  return el;
}
