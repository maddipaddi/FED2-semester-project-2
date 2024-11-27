import { fetchSingleListing } from "../api/listing/read.mjs";
import { findId } from "./findId.mjs";

export async function populateForm() {
  try {
    const id = findId();
    const listing = await fetchSingleListing(id);

    // Populate title and description
    document.getElementById("title").value = listing.title;
    document.getElementById("description").value = listing.description;

    // Populate image URLs
    const imageInputs = document.querySelectorAll('input[name="images[]"]');
    listing.media.forEach((mediaItem, index) => {
      if (imageInputs[index]) {
        imageInputs[index].value = mediaItem.url || ""; // Handle empty media
      }
    });

    // Populate category
    const categorySelect = document.getElementById("category");
    categorySelect.value =
      listing.tags.find((tag) =>
        ["handbag", "bag", "watch", "jewelry"].includes(tag)
      ) || "handbag"; // Default to 'handbag' if no category found

    // Populate auction end time
    const auctionEndsInput = document.getElementById("auctionEnds");
    const auctionEndDate = new Date(listing.endsAt);
    auctionEndsInput.value = auctionEndDate.toISOString().slice(0, 16); // Format for datetime-local input
  } catch (error) {
    console.error("Failed to populate form:", error);
  }
}
