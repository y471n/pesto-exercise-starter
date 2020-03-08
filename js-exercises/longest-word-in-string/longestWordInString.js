function longestWordInString(string) {
  const wordsLength = string.split(' ').map(word => word.length);
  return Math.max(...wordsLength);
}

export { longestWordInString };
