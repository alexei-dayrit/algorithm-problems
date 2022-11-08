// Function checks whether string1 has substring (string2) in it
const isSubstring = (string1, string2) => {
  const loweredS1 = string1.toLowerCase();
  const loweredS2 = string2.toLowerCase();
  console.log('🚀 ~ file: main.js ~ line 4 ~ isSubstring ~ s1.includes(string2);', loweredS1.includes(loweredS2));
  return loweredS1.includes(loweredS2);
};

const test1 = 'san francisco';
const test2 = 'fran';

const test3 = 'san FrAncisco';
const test4 = 'fran';

console.log('return:', isSubstring(test1, test2));
console.log('return:', isSubstring(test3, test4));
