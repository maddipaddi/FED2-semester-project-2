import { displayMedia } from "../../utilities/displayFirstImageOnListing.mjs";
import { formatDateWithDayTimeDate } from "../../utilities/formatDate.mjs";

/**
 * Displays bids along with their associated listings for a user's profile.
 *
 * This function processes a list of bids, associates each bid with its respective listing, 
 * and calculates the user's highest bid amount for each listing. It returns an array of 
 * processed bid data.
 *
 * @function
 * @param {Array<Object>} bids - An array of bid objects.
 * @param {Object} bids[].listing - The listing associated with a bid.
 * @param {number} bids[].amount - The bid amount.
 * @returns {Array<Object>} An array of processed bids, including listing details and the user's highest bid for each listing.
 *
 * @example
 * const bids = [
 *   { amount: 100, listing: { id: 1, title: "Item A" } },
 *   { amount: 150, listing: { id: 1, title: "Item A" } },
 *   { amount: 200, listing: { id: 2, title: "Item B" } },
 * ];
 * const processedBids = displayBidsWithListingsByProfile(bids);
 * console.log(processedBids);
 * // Output: Processed data including highest bids per listing.
 */

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
