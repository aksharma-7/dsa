// sum upto n

function sum(n) {
  if (n === 1) return n;
  return n + sum(n - 1);
}

// console.log(sum(6));
console.log(sumTail(6));
