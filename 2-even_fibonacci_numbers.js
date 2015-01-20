var x = 0;
var sum = 0;
var prev = 1;
while(x < 4000000){
	if(x % 2 === 0){
		sum += x;
	}
	var temp = x;
	x += prev;
	prev = temp;
}
console.log(sum);
