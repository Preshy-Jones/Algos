var arr: number[] = [8, 5, 2, 9, 5, 6, 3];

var swap = (i: number, j: number, arr: number[]) => {
  let currentElement = arr[i];
  let nextElement = arr[i + 1];
  arr[i] = nextElement;
  arr[i + 1] = currentElement;
};

var swap2 = (i: number, j: number, arr: number[]) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

var insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    console.log(i);

    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap2(j, j - 1, arr);
      // [arr[j], arr[j - 1]] = [arr[j-  1], arr[j]];
      j -= 1;
      console.log(j);
    }
  }
  return arr;
};

console.log(insertionSort(arr));
