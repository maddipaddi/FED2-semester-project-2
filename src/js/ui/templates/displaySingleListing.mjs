// starting point: not finished with all info 


export function displaySingleListing(listing) {
    const listingContainer = document.createElement("div");

    const listingInfo = document.createElement("div");

    const title = document.createElement("h2");
    title.innerText = listing.title;

    let mediaContainer;

   if (listing.media && listing.media.length > 0) {
  mediaContainer = document.createElement("div");
  listing.media.forEach((mediaItem) => {
    if (mediaItem.url) {
      const media = document.createElement("img");
      media.setAttribute("src", mediaItem.url);
      mediaContainer.appendChild(media);
    }
  });
}
    const description = document.createElement("p")
    description.innerText = listing.description;

    listingInfo.append(title, mediaContainer, description);

    const bidInfo = document.createElement("div");

    const currentBidTitle = document.createElement("h3");
    currentBidTitle.innerText = "Current bid";

    const currentBid = document.createElement("h3");
    currentBid.innerText = ``; // will add functionality to fetch highest bid dynamically

    const bidInput = document.createElement("input");
    bidInput.name = "bidInput";
    bidInput.type = "number";

    const placeBidButton = document.createElement("button");
    placeBidButton.innerText = "Place bid";

    const wishlistButton = document.createElement("button");
    wishlistButton.innerText = "Wishlist";

    bidInfo.append(currentBidTitle, currentBid, bidInput, placeBidButton, wishlistButton);

    const sellerInfo = document.createElement("div");

    const sellerTitle = document.createElement("h3");
    sellerTitle.innerText = "Seller";

    const sellerName = document.createElement("p");
    sellerName.innerText = `${listing.seller.name}`;

    listingContainer.append(
      listingInfo, 
      bidInfo,
      sellerInfo,
    );

    return listingContainer;
}