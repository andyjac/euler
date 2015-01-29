function largestPalindromeProduct(ceiling, floor) {
  var candidates = {}
      , counter = ceiling
      , product;

  while (counter > floor) {
    for (var i = ceiling; i > floor; i--) {
      product = i * counter;

      if (isPalindrome(product)) {
        candidates[i + ' * ' + counter] = product;
      }
    }
    counter--;
  }
  return findLargest(candidates);
}

function findLargest(candidates) {
  var largest = 0;

  for (var p in candidates) {
    if (candidates[p] > largest)
      largest = candidates[p];
  }
  return largest;
}

function isPalindrome(num) {
  var reverseNum = parseInt(num.toString().split('').reverse().join(''), 10);

  if (num === reverseNum) {
    return true;
  }
  else {
    return false;
  }
}
