import { formatDateWithDate } from "../../utilities/formatDate.mjs";
import { getHighestBid } from "../../utilities/getHighestBid.mjs";

export function displayListings(listings) {
  return listings.map(createListingCard);
}

function createListingCard(listing) {
  const container = createElement("div", {
    classList: ["bg-white", "shadow", "rounded-lg", "p-4", "flex", "flex-col", "justify-between"]
  });

  const imgLink = createElement("a", {
    href: `/listing/read?id=${listing.id}`,
    children: [createMediaContainer(listing)]
  });

  const sellerAndEnding = createSellerAndEnding(listing);
  const bidAndButton = createBidAndButton(listing);

  container.append(imgLink, sellerAndEnding, bidAndButton);
  return container;
}

function createMediaContainer(listing) {
  const mediaWrapper = createElement("div", {
    classList: ["flex", "justify-center", "items-center", "w-full", "h-52", "bg-gray-200", "rounded-md", "overflow-hidden", "mb-4"]
  });

  if (listing.media?.length > 0) {
    const media = createElement("img", {
      src: listing.media[0].url,
      classList: ["w-full", "h-full", "object-cover"]
    });
    mediaWrapper.appendChild(media);
  }

  return mediaWrapper;
}

function createSellerAndEnding(listing) {
  const container = createElement("div", {
    classList: ["flex", "justify-between", "items-center", "mb-2"]
  });

  const sellerLink = createElement("a", {
    href: `/profile/read?user=${listing.seller.name}`,
    innerText: listing.seller.name,
    classList: ["text-sm", "font-medium", "text-gray-700", "hover:font-bold"]
  });

  const endDate = createElement("p", {
    innerText: `Ending: ${formatDateWithDate(listing.endsAt)}`,
    classList: ["text-sm", "text-gray-500"]
  });

  container.append(sellerLink, endDate);
  return container;
}

function createBidAndButton(listing) {
  const container = createElement("div", {
    classList: ["flex", "justify-between", "items-center", "gap-4", "mt-2"]
  });

  const bid = createElement("p", {
    innerText: `Current bid: ${getHighestBid(listing.bids)}`,
    classList: ["text-sm", "font-bold", "text-gray-800"]
  });

  const button = createElement("a", {
    href: `/listing/read?id=${listing.id}`,
    innerText: "Bid",
    classList: ["bg-accent", "text-white", "text-sm", "py-2", "px-4", "rounded-md", "text-center", "hover:font-bold", "uppercase"]
  });

  container.append(bid, button);
  return container;
}

function createElement(tag, { innerText, classList = [], children = [], ...attributes }) {
  const el = document.createElement(tag);
  if (innerText) el.innerText = innerText;
  if (classList.length) el.classList.add(...classList);
  Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
  children.forEach(child => el.appendChild(child));
  return el;
}
