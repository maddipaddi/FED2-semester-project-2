export function setTagsWithCategory(
  category,
  uniqueAppTag = "luxuryauctionhouse"
) {
  const tags = [uniqueAppTag];

  if (category) {
    tags.push(category);
  }

  return tags;
}
