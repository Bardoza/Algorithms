// Write your code here

function findSignatureCounts(arr) {
  const signatures = arr.map(() => 0);
  const visited = {};

  for (let i = 0; i <= arr.length; i++) {
    let count = 0;
    const current = arr[i];
    const next = arr[current - 1];

    if (current === next) {
      count++;
      signatures[i] = count;
    } else {
    }
  }

  return signatures;
}

export default findSignatureCounts;
