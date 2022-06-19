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
