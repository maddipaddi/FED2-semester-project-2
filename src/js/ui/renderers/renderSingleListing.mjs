import { fetchSingleListing } from "../../api/listing/read.mjs";
import { findId } from "../../utilities/findId.mjs";
import { displaySingleListing } from "../templates/displaySingleListing.mjs";

export async function renderListing() {
  const id = findId();
  const options = {
    _seller: true,
    _bids: true,
  };

  const listing = await fetchSingleListing(id, options);

  displaySingleListing(listing);
}
