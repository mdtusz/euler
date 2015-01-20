function sumOfN(n){
  return (n * (n+1))/2;
}

var squaredSum = sumOfN(100) * sumOfN(100);
console.log(squaredSum);

function sumOfSquares(n){
  return (n * (n+1) * (2*n + 1))/6;
}

var sumSquared = sumOfSquares(100);
console.log(sumSquared);

console.log(squaredSum - sumSquared);
