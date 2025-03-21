// Assignment Question-2 & 3

let number = prompt("Enter a number : ");
let a = number;
let sum = 0;
let count = 0;  
while(number>0){
  digit = (number%10);
   sum += digit;
  number /=10;
  count++;
}
alert("The sum of digits of "+a+" = "+sum);
alert("Total no. of digits in "+a+" = "+count);
