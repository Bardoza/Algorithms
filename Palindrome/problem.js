export default (str) => {
  const chars = new Map();

  for (let i = 0; i < str.length; i++) {
    const letter = str.charAt(i).toLowerCase();
    if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
      if (!chars.has(letter)) {
        chars.set(letter, 1);
      } else {
        chars.set(letter, chars.get(letter) + 1);
      }
    }
  }

  let foundOdd = false;
  for (let count of chars.values()) {
    if (count % 2 !== 0) {
      if (!foundOdd) {
        foundOdd = true;
      } else {
        return false;
      }
    }
  }

  return true;
};
