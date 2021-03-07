const number = parseInt(prompt('Enter the numbers :'))
let num1 = 0;
let num2 = 1;
let result = '';
for (i = 1; i <= number; i++) {
    document.write(num1);
    result = num1 + num2;
    num1 = num2;
    num2 = result;
}
// function fib(n) {
//     if (n <= 1) {
//       return n;
//     } else {
//       return fib(n - 1) + fib(n - 2);
//     }
//   }
  
//   fib(10); 