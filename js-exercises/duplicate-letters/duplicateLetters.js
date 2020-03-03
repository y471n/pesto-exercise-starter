function duplicateLetters(...args) {
  const hm = {};
  let maxRepeatingCharacterCount = 1;
  [...args[0]].forEach(c => {
    if (c in hm) {
      hm[c] += 1;
      if (maxRepeatingCharacterCount < hm[c]) {
        maxRepeatingCharacterCount = hm[c];
      }
    } else {
      hm[c] = 1;
    }
  });
  return maxRepeatingCharacterCount > 1 ? maxRepeatingCharacterCount : false;
}

export { duplicateLetters };
