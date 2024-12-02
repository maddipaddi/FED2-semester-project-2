export function displayWinsByProfile(listings) {
  return listings.map((listing) => {
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
    auctionEnd.innerText = `Ended: ${formatDateWithDayTimeDate(listing.endsAt)}`;

    const bidWon = document.createElement("p");
    bidWon.innerText = `Bid won: $`;

    listingContainer.append(linkToReadListing, auctionEnd, bidWon);

    return listingContainer;
  });
}
