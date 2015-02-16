function test(length) {

  var maxNum = Math.pow(10, length) - 1;
  var palindromes = [];

  for (var i = maxNum; i > 0; i--) {
    for (var j = maxNum; j > 0; j--) {
      if ((i * j).toString() === (i * j).toString().split('').reverse().join('')) {
        palindromes.push(i * j);
      }
    }
  }

  palindromes.sort(function (a, b) {
    return a - b;
  });

  console.log(palindromes[palindromes.length - 1]);
}

test(process.argv[2]);