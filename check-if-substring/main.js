// Function checks whether string1 has substring (string2) in it
const isSubstring = (string1, string2) => {
  console.log('🚀 ~ file: main.js ~ line 4 ~ isSubstring ~ s1.includes(string2);', s1.includes(string2));
  return s1.includes(string2);
};

const s1 = 'san francisco';
const s2 = 'fran';

console.log('return:', isSubstring(s1, s2));
