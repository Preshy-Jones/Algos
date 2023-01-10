var arr: number[] = [8, 5, 2, 9, 5, 6, 3];
var arr2 = [1, 2, 3];

const selectionSort = (arr: number[]) => {
  // Write your code here.
  let count = 0;

  while (count !== arr.length - 1) {
    // isSorted = true;
    let currentMinNumberIndex = count;
    for (let i = count; i < arr.length; i++) {
      console.log(i);

      if (arr[i] < arr[currentMinNumberIndex]) {
        currentMinNumberIndex = i;
      }
    }
    console.log(count);

    swap(count, currentMinNumberIndex, arr);

    count++;
  }
  return arr;
};

var swap = (i: number, j: number, arr: number[]) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(selectionSort(arr2));
