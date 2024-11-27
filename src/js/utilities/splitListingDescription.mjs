export function splitDescription(description) {
  // Use a regular expression to match the first sentence
  const sentences = description.match(/[^.!?]+[.!?]+/g); // Splits by sentence-ending punctuation
  const firstSentence = sentences ? sentences[0] : description; // First sentence or the whole description if no punctuation
  const remainingText = sentences
    ? description.substring(firstSentence.length).trim() // Remainder of the description
    : "";

  return { firstSentence, remainingText };
}
