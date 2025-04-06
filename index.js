const binarySearch = (arr, trgt) => {
  let x = 0;
  let y = arr.length - 1;

  while (x <= y) {
    let m = Math.round((x + y) / 2);

    if (arr[m] === trgt) {
      return m;
    }
    if (arr[m] < trgt) {
      x = m + 1;
    } else {
      y = m - 1;
    }
    return -1; //not found
  }
};

module.exports = binarySearch