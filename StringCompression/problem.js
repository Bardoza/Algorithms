export default (str) => {
  let compressed = [];
  let counter = 0;
  let temp = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === temp) {
      counter++;
    } else {
      if (temp) {
        compressed.push(`${temp}${counter}`);
      }
      temp = str.charAt(i);
      counter = 1;
    }
  }

  compressed.push(`${temp}${counter}`);

  return compressed.length * 2 < str.length ? compressed.join("") : str;
};
