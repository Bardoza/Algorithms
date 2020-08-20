export default (str, len) => {
  let spaces = 0;
  let index = 0;

  const aux = [];

  for (let i = 0; i < len; i++) {
    if (str[i] === " ") {
      spaces++;
    }
  }

  index = len + spaces * 2;

  for (let i = len - 1; i >= 0; i--) {
    if (str[i] === " ") {
      aux[index - 1] = "0";
      aux[index - 2] = "2";
      aux[index - 3] = "%";
      index -= 3;
    } else {
      aux[index - 1] = str[i];
      index--;
    }
  }

  return aux.join("");
};
