const reverseString = (str) => {
  const strArray = str.split('');

  let low = 0;
  let high = strArray.length - 1;
  while (low <= high) {
    [strArray[low], strArray[high]] = [strArray[high], strArray[low]];
    low++;
    high--;
  }

  return strArray.join('');
};

const reverseStringRecursion = (str, low, high) => {
  //   const strArray = str.split('');
  if (low >= high) return;
  [str[low], str[high]] = [str[high], str[low]];
  reverseStringRecursion(str, low + 1, high - 1);
};

const str = 'My name is Atul';
// calling in conventional method
// const reversedString = reverseString(str);
// console.log(str);

// calling using recursion
const strArray = str.split('');
reverseStringRecursion(strArray, 0, str.length - 1);
console.log(strArray.join(''));
