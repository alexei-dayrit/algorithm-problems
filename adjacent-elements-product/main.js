function solution(inputArray) {
  var highestProduct;
  for (var i = 0; i < inputArray.length - 1; i++) {
    if (i === 0) {
      highestProduct = inputArray[i] * inputArray[i + 1]
    }
    if ((inputArray[i] * inputArray[i + 1]) > highestProduct) {
      highestProduct = (inputArray[i] * inputArray[i + 1]);
    }
  }
  return highestProduct;
}
