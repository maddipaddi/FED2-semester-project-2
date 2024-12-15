import { formatDateWithDayTimeDate } from "../../utilities/formatDate.mjs";
import { renderBids } from "../renderers/renderBidsForSingleListing.mjs";
import { getHighestBid } from "../../utilities/getHighestBid.mjs";
import { splitDescription } from "../../utilities/splitListingDescription.mjs";
import { fetchListingsByProfile } from "../../api/listing/read.mjs";
import { readListingsByProfileActive } from "../listing/read.mjs";
import { initializeWishlistButton } from "../components/wishlist/wishlistBtn.mjs";
import { listingImages } from "../../utilities/displayAllImagesOnSingleListing.mjs";
import { loggedInUser } from "../../utilities/findLoggedInUser.mjs";

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

  if (loggedInUser()) {
    const currentBid = document.getElementById("current-bid");
    currentBid.innerText = `${getHighestBid(listing.bids)}`;

    if (loggedInUser().name === listing.seller.name) {
      const bidAndWishlistBtnContainer = document.getElementById(
        "bid-and-wishlist-btn-container"
      );
      bidAndWishlistBtnContainer.className = "hidden aria-hidden";
    } else {
      const bidInput = document.getElementById("amount");
      bidInput.setAttribute(
        "placeholder",
        `${getHighestBid(listing.bids)} or up`
      );

      initializeWishlistButton(listing.id);
    }

    const auctionEnd = document.getElementById("auctionEnd");
    if (new Date(listing.endsAt) > new Date()) {
      let close = "Closes";
      auctionEnd.innerText = `${close}: ${formatDateWithDayTimeDate(listing.endsAt)}`;
    } else {
      let close = "Closed";
      auctionEnd.innerText = `${close}: ${formatDateWithDayTimeDate(listing.endsAt)}`;
    }

    renderBids(listing.bids);

    const sellerNameContainer = document.getElementById(
      "seller-name-container"
    );
    const sellerName = `${listing.seller.name}`;
    sellerNameContainer.innerText = sellerName;
    sellerNameContainer.setAttribute(
      "href",
      `/profile/read?user=${sellerName}`
    );

    const sellerListings = document.getElementById("seller-listings");
    const sellerTotalListingsArray = await fetchListingsByProfile(sellerName);

    const sellerActiveListingsArray =
      await readListingsByProfileActive(sellerName);

    sellerListings.innerText = `${sellerActiveListingsArray.length} Listings active / ${sellerTotalListingsArray.length} Total listings`;
  } else {
    const bidsSidebar = document.getElementById("bids-sidebar");
    bidsSidebar.innerHTML = `<h2 class="text-lg font-semibold mb-4 uppercase">You are not logged in</h2>
    <p>Create an account and/or log in to see details about the bids on this listing and the seller. You will also be able to place your own bid or add listing to wishlist.</p>`;
    const sellerSidebar = document.getElementById("seller-sidebar");
    sellerSidebar.className = "hidden";
  }
}
