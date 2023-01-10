var arr: number[] = [8, 5, 2, 9, 5, 6, 3];

var bubbleSort = (arr: number[]): number[] => {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap2(i, i + 1, arr);
        isSorted = false;
      }
    }
    console.log(isSorted);
  }

  return arr;
};

var swap = (i: number, j: number, arr: number[]) => {
  let currentElement = arr[i];
  let nextElement = arr[i + 1];
  arr[i] = nextElement;
  arr[i + 1] = currentElement;
};

var swap2 = (i: number, j: number, arr: number[]) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(bubbleSort(arr));
