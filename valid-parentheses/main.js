var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const topElement = stack[stack.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else if (s[i] === ')' && topElement === '(' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === ']' && topElement === '[' && stack.length !== 0) {
      stack.pop();
    } else if (s[i] === '}' && topElement === '{' && stack.length !== 0) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
