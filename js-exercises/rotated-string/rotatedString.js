const rotatedString = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === str2) {
    return false;
  }
  const duplicatedCheckString = str2 + str2;
  // For str2 to be a rotated version of str1,
  // str1 should be present in str1 + str2
  return duplicatedCheckString.indexOf(str1) !== -1;
};

export { rotatedString };
