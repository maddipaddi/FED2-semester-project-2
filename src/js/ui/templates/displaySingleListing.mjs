import { formatDateWithDayTimeDate } from "../../utilities/formatDate.mjs";
import { renderBids } from "../renderers/renderBidsForSingleListing.mjs";
import { getHighestBid } from "../../utilities/getHighestBid.mjs";
import { splitDescription } from "../../utilities/splitListingDescription.mjs";
import { fetchListingsByProfile } from "../../api/listing/read.mjs";
import { readListingsByProfileActive } from "../listing/read.mjs";
import { initializeWishlistButton } from "../components/wishlist/wishlistBtn.mjs";

export async function displaySingleListing(listing) {
  const title = document.getElementById("title");
  title.innerText = listing.title;

  const smallDescription = document.getElementById("small-description");
  const { firstSentence, remainingText } = splitDescription(
    listing.description
  );
  smallDescription.innerText = firstSentence;

  if (listing.media && listing.media.length > 0) {
    const mediaContainerMain = document.getElementById("media-container-main");
    const mediaContainer = document.getElementById("media-container");
  
    listing.media.forEach((mediaItem, index) => {
      if (index === 0) {
        const mediaMain = document.createElement("img");
        mediaMain.setAttribute("src", mediaItem.url);
        mediaMain.className = "h-96 w-full object-cover object-center"; 
        mediaContainerMain.appendChild(mediaMain);
      } else {
        const media = document.createElement("img");
        media.setAttribute("src", mediaItem.url);
        media.className = "h-56 w-full object-cover object-center"; 
        mediaContainer.append(media);
      }
    });
  }

  const description = document.getElementById("description");
  description.innerText = remainingText;

  const currentBid = document.getElementById("current-bid");
  currentBid.innerText = `${getHighestBid(listing.bids)}`;

  const bidInput = document.getElementById("bid-input");
  bidInput.setAttribute("placeholder", `${getHighestBid(listing.bids)} or up`);

  initializeWishlistButton(listing.id);

  const auctionEnd = document.getElementById("auctionEnd");
  auctionEnd.innerText = `${formatDateWithDayTimeDate(listing.endsAt)}`;

  renderBids(listing.bids);

  const sellerNameContainer = document.getElementById("seller-name-container");
  const sellerName = `${listing.seller.name}`;
  sellerNameContainer.innerText = sellerName;

  const sellerListings = document.getElementById("seller-listings");
  const sellerTotalListingsArray = await fetchListingsByProfile(sellerName);

  const sellerActiveListingsArray =
    await readListingsByProfileActive(sellerName);

  sellerListings.innerText = `${sellerActiveListingsArray.length} Listings active / ${sellerTotalListingsArray.length} Total listings`;
}
