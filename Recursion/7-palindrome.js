function isPalindrome(str, low, high) {
  if (low >= high) return true;
  if (str[low] !== str[high]) return false;
  return isPalindrome(str, low + 1, high - 1);
}

// function isPalindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
//   return false;
// }

str = 'amanaplanacanalpandemonium';
console.log(isPalindrome(str.split(''), 0, str.length - 1));
