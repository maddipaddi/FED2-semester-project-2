import { formatDateWithDayTimeDate } from "../../utilities/formatDate.mjs";
import { getHighestBid } from "../../utilities/getHighestBid.mjs";

export const displayOtherProfilesListings = async (listings) => {
  return listings.map((listing) => {
    const container = document.createElement("div");
    container.classList.add(
      "bg-white",
      "shadow",
      "rounded-lg",
      "p-4",
      "flex",
      "flex-col",
      "justify-between"
    );

    const linkToReadListing = document.createElement("a");
    linkToReadListing.setAttribute("href", `/listing/read?id=${listing.id}`);

    const mediaContainer = document.createElement("div");
    mediaContainer.classList.add(
      "w-full",
      "h-52",
      "bg-gray-200",
      "rounded-md",
      "overflow-hidden",
      "mb-4"
    );

    if (listing.media && listing.media.length > 0) {
      const firstMedia = listing.media[0];
      const media = document.createElement("img");
      media.setAttribute("src", firstMedia.url);
      mediaContainer.appendChild(media);
    }

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
      "mb-2"
    );
    auctionEnd.innerText = `Ending: ${formatDateWithDayTimeDate(listing.endsAt)}`;

    const currentBid = document.createElement("p");
    currentBid.classList.add(
      "bg-accent",
      "text-background",
      "font-medium",
      "py-2",
      "px-4",
      "rounded-b-md",
      "block",
      "text-center"
    );
    const highestBid = getHighestBid(listing.bids);
    currentBid.innerText = `Current bid: ${highestBid}`;

    container.append(linkToReadListing, auctionEnd, currentBid);

    return container;
  });
};
