import { displayMedia } from "../../utilities/displayFirstImageOnListing.mjs";
import { formatDateWithDayTimeDate } from "../../utilities/formatDate.mjs";

export function displayBidsWithListingsByProfile(bids) {
  return bids.map((bid) => {
    const listing = bid.listing;
    const userHighestBid = bids
      .filter((b) => b.listing.id === listing.id)
      .reduce((max, b) => (b.amount > max ? b.amount : max), 0);

    const listingContainer = document.createElement("div");
    listingContainer.classList.add(
      "bg-white",
      "shadow",
      "rounded-lg",
      "p-4",
      "flex",
      "flex-col",
      "justify-between",
      "mb-4"
    );

    const linkToReadListing = document.createElement("a");
    linkToReadListing.setAttribute("href", `/listing/read?id=${listing.id}`);

    const mediaContainer = displayMedia(listing);

    linkToReadListing.appendChild(mediaContainer);

    const auctionEnd = document.createElement("p");
    auctionEnd.classList.add(
      "bg-primary",
      "text-background",
      "font-medium",
      "py-2",
      "px-4",
      "rounded-t-md",
      "text-center",
      "mb-2",
      "h-16"
    );
    auctionEnd.innerText = `Ending: ${formatDateWithDayTimeDate(listing.endsAt)}`;

    const currentBid = document.createElement("p");
    currentBid.classList.add(
      "bg-secondary",
      "text-background",
      "font-medium",
      "py-2",
      "px-4",
      "rounded-b-md",
      "block",
      "text-center"
    );
    currentBid.innerText = `My current bid: $${userHighestBid}`;

    listingContainer.append(linkToReadListing, auctionEnd, currentBid);

    return listingContainer;
  });
}
