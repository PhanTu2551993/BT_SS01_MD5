function calculateSum(arr) {
  return arr.reduce((total, number) => total + number, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
