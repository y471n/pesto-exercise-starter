function abbreviateString(assumedString) {
  if (typeof assumedString !== 'string') {
    throw Error('Expected parameter to be String');
  }
  const stringToBeAbbreviated = assumedString;
  const words = stringToBeAbbreviated.split(' ');
  if (words.length === 1) {
    return stringToBeAbbreviated;
  }
  return `${`${words[0]} ${words[words.length - 1][0].toUpperCase()}`}.`;
}

export { abbreviateString };
