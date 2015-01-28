var fibList = [1, 2];

function populateFibList() {
  var nextNum = fibList[fibList.length - 1] + fibList[fibList.length - 2];

  if (nextNum > 4000000) {
    evenNumSumFinder(fibList);
  } else {
    fibList.push(nextNum);
    populateFibList();
  }
}

function evenNumSumFinder(fibList) {
  var sum = 0;
  for (var i = 0; i < fibList.length; i++) {
    if (fibList[i] % 2 === 0) {
      sum += fibList[i];
    }
  }
  return sum;
}
