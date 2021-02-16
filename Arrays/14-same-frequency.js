// Given two positive numbers if they same frequency of digits

// @method      frequency counter
// @complexity  O(n)
const sameFrequency = (num1, num2) => {
  const arr1 = Array.from(String(num1));
  const arr2 = Array.from(String(num2));

  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequency = {};
  for (let key of arr1) {
    frequency[key] ? (frequency[key] += 1) : (frequency[key] = 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    let key = arr2[i];
    if (!frequency[key]) {
      return false;
    } else {
      frequency[key] -= 1;
    }
  }
  return true;
};

console.log(sameFrequency(221, 212));
