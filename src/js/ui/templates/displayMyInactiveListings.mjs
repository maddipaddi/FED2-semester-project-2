export function displayMyInactiveListings(listings) {
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

    const soldFor = document.createElement("p");

    if (listing.bids && listing.bids.length > 0) {
      const highestBid = Math.max(...listing.bids.map((bid) => bid.amount));
      soldFor.innerText = `Sold for: $${highestBid}`;
    } else {
      soldFor.innerText = "Not sold";
    }

    listingContainer.append(linkToReadListing, soldFor);

    return listingContainer;
  });
}
