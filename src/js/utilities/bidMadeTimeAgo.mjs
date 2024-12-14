export function timeAgo(dateString) {
  const now = new Date();
  const bidDate = new Date(dateString);
  const diffMs = now - bidDate;

  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 60) return `${minutes}min ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}hours ago`;

  const days = Math.floor(hours / 24);
  return `${days}days ago`;
}
