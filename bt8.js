function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function calculateSumOfPrimes(arr) {
  const primes = arr.filter(isPrime);
  return primes.reduce((total, number) => total + number, 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calculateSumOfPrimes(numbers));
