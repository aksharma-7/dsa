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

const sameFrequencyTwo = (num1, num2) => {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
};

console.log(sameFrequency(221, 212));
