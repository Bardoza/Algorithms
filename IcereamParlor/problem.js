function icecreamParlor(m, arr) {
  const complements = {};
  for (let i = 0; i < arr.length; i++) {
    if (complements[i]) {
      return [complements[i], i + 1];
    }
    complements[m - arr[i]] = i + 1;
  }
  return [];
}

export default icecreamParlor;
