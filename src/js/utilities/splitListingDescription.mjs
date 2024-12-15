export function splitDescription(description) {
  const sentences = description.match(/[^.!?]+[.!?]+/g); 
  const firstSentence = sentences ? sentences[0] : description; 
  const remainingText = sentences
    ? description.substring(firstSentence.length).trim() 
    : "";

  return { firstSentence, remainingText };
}
