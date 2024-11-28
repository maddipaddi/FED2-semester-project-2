export const getHighestBid = (bids) => {
  if (!bids || bids.length === 0) {
    return "$0";
  }

  const highestBid = bids.reduce((max, bid) => {
    return bid.amount > max.amount ? bid : max;
  }, bids[0]);

  return `$${highestBid.amount}`;
};
