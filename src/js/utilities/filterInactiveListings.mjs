export const inactiveListings = (listings) => {
  const currentDate = new Date();
  const inactiveListings = listings.filter((listing) => {
    const endsAtDate = new Date(listing.endsAt);
    return endsAtDate < currentDate;
  });
  return inactiveListings;
};
