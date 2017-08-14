var sum = 0;
   //we iterate through the loop inputing the condition of i<1000
 for(var i = 0; i < 1000; i++){ 
  // % is used for finding out the multiples of 3 and 5
if(i%3 === 0 || i%5 === 0)   
{
 // here we add every multiple of 3 and 5 and assign it to the sum variable
sum += i;   
}
}
//it reads the final sum
console.log('The sum is' + " " +sum);
