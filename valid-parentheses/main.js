/* Explanation for stack with map
IDEA: if we find an opening bracket we push it onto the stack. Then we check if
next character is a matching closing bracket by using the current char in our stack
and the hash map of brackets to see if the prop value is the same as current char.
We return false if current character doesn't satisfy the previous conditions because an empty
stack means we didn't find an opening bracket

- create map of bracket pairs, keys = opening brackets
- create stack array
- loop through input string
  - if current char is an opening bracket,
    - push it onto the stack
  - if current char is a closing bracket with bracket[current char in stack] and stack isn't empty
    - pop from the stack
  - else if stack is empty,
    - return false because can't have closing bracket in stack
- return true if stack.length is 0, return false if stack isn't empty

// An alternative way is to push a closing bracket if the current character is an opening bracket
// Then if we find another closing bracket we pop the stack
*/

var isValid = function (s) {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (brackets[currentChar]) {
      stack.push(currentChar);
    } else if (stack.length > 0 && brackets[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else if (stack.length === 0) {
      return false;
    }
  }

  return stack.length === 0;
};

/* Stack solution without hashmap

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

*/
