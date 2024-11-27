// starting point: not finished with all info

export function displayListings(listings) {
  return listings.map((listing) => {
    const listingContainer = document.createElement("div");

    const mediaContainer = document.createElement("div");

    if (listing.media && listing.media.length > 0) {
      const firstMedia = listing.media[0];
      const media = document.createElement("img");
      media.setAttribute("src", firstMedia.url);
      mediaContainer.appendChild(media);
    }

    const currentBid = document.createElement("p");
    currentBid.innerText = `Current bid: `;

    const endingDate = document.createElement("p");
    endingDate.innerText = `Ending: `;

    const bidButton = document.createElement("a");
    bidButton.setAttribute("href", `/listing/read?id=${listing.id}`);
    bidButton.innerText = "Bid";

    listingContainer.append(mediaContainer, currentBid, endingDate, bidButton);

    return listingContainer;
  });
}
