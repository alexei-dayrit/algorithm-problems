var isPalindrome = function (s) {
  let pointOne = 0;
  let pointTwo = s.length - 1;

  while (pointOne < pointTwo) {
    while (!isValidChar(s.charAt(pointOne))) {
      pointOne++;
    }
    while (!isValidChar(s.charAt(pointTwo))) {
      pointTwo--;
    }

    if (s.charAt(pointOne).toLowerCase() !== s.charAt(pointTwo).toLowerCase()) {
      return false;
    }

    pointOne++;
    pointTwo--;
  }

  return true;
};

const isValidChar = char => {
  const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return validChars.indexOf(char.toLowerCase()) > -1;
};

/* Alternate solution using regex, reverse, and join

const removeNonAlphanumeric = string => string.toLowerCase().replace(/[\W_]/g, '');

var isPalindrome = function (s) {
  const lettersOnly = removeNonAlphanumeric(s);
  const reversedString = lettersOnly.split('').reverse().join('');
  return lettersOnly === reversedString;
};

*/

const s = 'A man, a plan, a canal: Panama';
isPalindrome(s);

/* Brute force solution
var isPalindrome = function (s) {
  const isValidChar = char => {
    const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return validChars.indexOf(char.toLowerCase()) > -1;
  };

  const loweredString = s.toLowerCase();
  const splitArray = loweredString.split('');
  let newString = '';

  for (let i = 0; i < splitArray.length; i++) {
    const current = splitArray[i];
    if (isValidChar(current)) {
      newString += current;
    }
  }
  const reversedString = newString.split('').reverse().join('');
  return newString === reversedString;
};
*/
