function divisibleBy3And5() {
  var result = 0;
  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  console.log(result);
}

divisibleBy3And5();
