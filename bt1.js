function sum(arr) {
  let total = 0;
  arr.forEach((number) => {
    total += number;
  });
  return total;
}

const numbers = [0, 0, 0, 0, 0];
console.log(sum(numbers));
