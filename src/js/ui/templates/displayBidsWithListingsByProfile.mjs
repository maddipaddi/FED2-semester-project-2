import { formatDateWithDayTimeDate } from "../../utilities/formatDate.mjs";

export function displayBidsWithListingsByProfile(bids) {
  return bids.map((bid) => {
    const listing = bid.listing; // The listing associated with the bid
    const userHighestBid = bids
      .filter((b) => b.listing.id === listing.id)
      .reduce((max, b) => (b.amount > max ? b.amount : max), 0);

    const listingContainer = document.createElement("div");

    const linkToReadListing = document.createElement("a");
    linkToReadListing.setAttribute("href", `/listing/read?id=${listing.id}`);

    const mediaContainer = document.createElement("div");

    if (listing.media && listing.media.length > 0) {
      const firstMedia = listing.media[0];
      const media = document.createElement("img");
      media.setAttribute("src", firstMedia.url);
      mediaContainer.appendChild(media);
    }

    linkToReadListing.appendChild(mediaContainer);

    const auctionEnd = document.createElement("p");
    auctionEnd.innerText = `Ending: ${formatDateWithDayTimeDate(listing.endsAt)}`;

    const currentBid = document.createElement("p");
    currentBid.innerText = `My current bid: $${userHighestBid}`;

    listingContainer.append(linkToReadListing, auctionEnd, currentBid);

    return listingContainer;
  });
}
