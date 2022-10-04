/* 1 pass solution explanation
instead of finding what array elements add to target, we search for current elem - target
dont need to initialize hashmap, so we don't have to deal with duplicates check

- create obj
- loop through array
- if target - array[i] is in obj then return [obj[target-array[i]], i]
- else add the array elem as the prop and it's index into the obj

ex:
const indices = {
    value: index
}
*/

var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const neededNum = target - nums[i];
    if (obj[nums[i]] !== undefined) {
      return [obj[nums[i]], i];
    }
    obj[neededNum] = i;
  }
};

/* Brute force method

var twoSum = function(nums, target) {
    const indices = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                indices.push(i, j)
            }
        }
    }
    return indices
};
*/
