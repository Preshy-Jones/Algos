var arr: number[] = [8, 5, 2, 9, 5, 6, 3];

var bubbleSort = (arr: number[]): number[] => {
  let isSorted = false;
  let count = 0;
  while (isSorted === false) {
    let isSwapped = false;
    for (let i = 0; i < arr.length - 1 - count; i++) {
      let currentElement = arr[i];

      let nextElement = arr[i + 1];

      if (currentElement > nextElement) {
        arr[i] = nextElement;
        arr[i + 1] = currentElement;
        isSwapped = true;
      }
    }
    count++;
    if (isSwapped === false) {
      isSorted = true;
    }
    console.log(isSorted);
  }

  return arr;
};

console.log(bubbleSort(arr));
