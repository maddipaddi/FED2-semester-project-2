import { displayMedia } from "../../utilities/displayFirstImageOnListing.mjs";
import { formatDateWithDayTimeDate } from "../../utilities/formatDate.mjs";
import { getHighestBid } from "../../utilities/getHighestBid.mjs";

export function displayWinsByProfile(listings) {
  return listings.map((listing) => {
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
    auctionEnd.innerText = `Ended: ${formatDateWithDayTimeDate(listing.endsAt)}`;
    auctionEnd.classList.add(
      "bg-primary",
      "text-background",
      "font-medium",
      "py-2",
      "px-4",
      "rounded-t-md",
      "text-center",
      "mb-2"
    );

    const bidWon = document.createElement("p");
    bidWon.innerText = `Bid won: ${getHighestBid(listing.bids)}`;
    bidWon.classList.add(
      "bg-accent",
      "text-background",
      "font-medium",
      "py-2",
      "px-4",
      "rounded-b-md",
      "block",
      "text-center",
      "hover:font-bold"
    );

    listingContainer.append(linkToReadListing, auctionEnd, bidWon);

    return listingContainer;
  });
}
