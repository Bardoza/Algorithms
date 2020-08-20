const isOneEditAway = (a, b) => {
  let diff = false;

  for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) !== b.charAt(i)) {
      if (!diff) {
        diff = true;
      } else {
        return false;
      }
    }
  }
  return true;
};

const isOneDeleteAway = (a, b) => {
  let indexA = 0;
  let indexB = 0;

  while (indexA < a.length && indexB < b.length) {
    if (a.charAt(indexA) !== b.charAt(indexB)) {
      if (indexA !== indexB) {
        return false;
      }
      indexA++;
    } else {
      indexA++;
      indexB++;
    }
  }

  return true;
};

export default (a, b) => {
  if (a.length === b.length) {
    return isOneEditAway(a, b);
  }

  return isOneDeleteAway(a, b);
};
