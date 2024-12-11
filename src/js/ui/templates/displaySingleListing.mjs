import { formatDateWithDayTimeDate } from "../../utilities/formatDate.mjs";
import { renderBids } from "../renderers/renderBidsForSingleListing.mjs";
import { getHighestBid } from "../../utilities/getHighestBid.mjs";
import { splitDescription } from "../../utilities/splitListingDescription.mjs";
import { fetchListingsByProfile } from "../../api/listing/read.mjs";
import { readListingsByProfileActive } from "../listing/read.mjs";
import { initializeWishlistButton } from "../components/wishlist/wishlistBtn.mjs";
import { listingImages } from "../../utilities/displayAllImagesOnSingleListing.mjs";

export async function displaySingleListing(listing) {
  const title = document.getElementById("title");
  title.innerText = listing.title;

  const smallDescription = document.getElementById("small-description");
  const { firstSentence, remainingText } = splitDescription(
    listing.description
  );
  smallDescription.innerText = firstSentence;

  listingImages(listing);

  const description = document.getElementById("description");
  description.innerText = remainingText;

  const currentBid = document.getElementById("current-bid");
  currentBid.innerText = `${getHighestBid(listing.bids)}`;

  const bidInput = document.getElementById("amount");
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
