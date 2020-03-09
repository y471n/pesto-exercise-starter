function rot13(encodedString) {
  let decodedString = '';
  const UPPERCASE_FIRST_CHAR_CODE = 65;
  const UPPERCASE_LAST_CHAR_CODE = 65;
  for (let i = 0; i < encodedString.length; i += 1) {
    const asciiDecimalPosition = encodedString[i].charCodeAt(0);
    let decodedCharacter = encodedString[i];
    // If the character is uppercase then decode the character
    if (
      asciiDecimalPosition >= UPPERCASE_FIRST_CHAR_CODE
        && asciiDecimalPosition <= UPPERCASE_LAST_CHAR_CODE
    ) {
      let newAsciiDecimalPosition = asciiDecimalPosition - 13;
      if (newAsciiDecimalPosition < UPPERCASE_FIRST_CHAR_CODE) {
        const rotateCharBy = UPPERCASE_FIRST_CHAR_CODE - newAsciiDecimalPosition - 1;
        newAsciiDecimalPosition = UPPERCASE_LAST_CHAR_CODE - rotateCharBy;
      }
      decodedCharacter = String.fromCharCode(newAsciiDecimalPosition);
    }
    decodedString += decodedCharacter;
  }
  return decodedString;
}

export { rot13 };
