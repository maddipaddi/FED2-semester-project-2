import { createListing } from "../../api/listing/create.mjs";
import { setMediaObjects } from "../../utilities/setImageUrlsAsObjects.mjs";

export async function onCreateListing(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  const imageURLs = formData.getAll("images[]");
  const mediaObjects = setMediaObjects(imageURLs);

  const listingData = {
    title: formValues.title,
    description: formValues.description,
    tags: ["luxuryauctionhouse"],
    media: mediaObjects,
    endsAt: formValues.auctionEnds
  };

  try {
    await createListing(listingData);
  } catch (error) {
    console.error("Create listing failed:", error); // for dev purposes, remember to add user-friendly messages displayed to user later
  }
}
