function largestPrimeFactor(num) {
  var i = 1;
  while (i < num) {
    i += 1;
    if (num % i === 0 && i < num) {
      return largestPrimeFactor(num / i);
    }
  }
  return num;
}
