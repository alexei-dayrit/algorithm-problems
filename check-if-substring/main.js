// Function checks whether string1 has substring (string2) in it

// * USES INDEXOF METHOD
// indexOf returns first index it finds the arg, or -1 if not found
const isSubstring = (string1, string2) => {
  let index = null;

  index = string1.toLowerCase().indexOf(string2.toLowerCase());
  if (index !== -1) {
    return true;
  } else {
    return false;
  }
};

// * USES INCLUDE METHOD
/*
const isSubstring = (string1, string2) => {
  const loweredS1 = string1.toLowerCase();
  const loweredS2 = string2.toLowerCase();
  console.log('🚀 ~ file: main.js ~ line 4 ~ isSubstring ~ s1.includes(string2);', loweredS1.includes(loweredS2));
  return loweredS1.includes(loweredS2);
};
 */

const test1 = 'san francisco';
const test2 = 'fran';

const test3 = 'san FrAncisco';
const test4 = 'fran';

const test5 = 'hiya';
const test6 = 'hi';

console.log('return:', isSubstring(test1, test2));
console.log('return:', isSubstring(test3, test4));
console.log('return:', isSubstring(test5, test6));
