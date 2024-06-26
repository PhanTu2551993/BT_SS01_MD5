function findLargestNumber(arr) {
  return arr.reduce((max, number) => (number > max ? number : max), arr[0]);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findLargestNumber(numbers));
