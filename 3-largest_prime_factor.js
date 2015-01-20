var number = 600851475143;
var factor = 2;
var largest = 2;
var newNumber = number;

while(factor*factor <= number){
  if(newNumber % factor === 0){
    newNumber = newNumber / factor;
    largest = factor;
  }else{
    factor++;
  }
}

console.log(largest);
