// //1. ---------first program---printing....---
// console.log("Print hello world");

// // 2.----------...adding two number----
// let a = 23;
// let b = 43;
// let add = a + b;
// console.log(add);

// // 3.-----check number is even or not-------
//  const prompt = require("prompt-sync")();
// let num = prompt("Enter the number") ;
// if(num%2==0) {
//     console.log("isEven");
// } 
// else {
//     console.log("notEven");
// }

// // 4.-----Divide two number------

// let l = 24;
//  let m = 3;
//  let div = l/m;
//  console.log(div);

//  // 5.--------Find square------

//  //const prompt = require("prompt-sync")();
//  let number = prompt("Enter the number");
//  let sqr = number*number;
//  console.log("Square of the number  = ",sqr);

//  // 6. ---------Calculate the area of triangle-------

//   // const prompt = require("prompt-sync")();
//   let radius = prompt("Enter the  radius : ");
//   let area = 3.14*radius*radius;
//   console.log("Area of a triangle = ",area);

//   // 7.--------Swap two number ------------

//   let x = 3;
//   let y =4;
//   let temp;
//   temp = x;
//   x = y;
//   y = temp;
//   console.log(x,y);

//   // 8.-------Swap two number without using third variable...

//   let c = 5;
//   let d = 2;
//   d = c + d;
//   c = d - c;
//   d = d - c;
//   console.log(c,d);

//   // 9.------Find the Largest Among Three Numbers..

//   let p ;
//   let q ;
//   let r;
//     if(p>q) {
//        if(p>r) {
//        console.log("a is the largest");
//     } else {
//             console.log("c is the largest");
//      }
//     } else {
//       if(q>r) {
//           console.log("b is the largest");
//       } else {
//           console.log("c is the largest");
//       }
//   }

// // 10. ------Convert Celsius to Fahrenheit..

// // const prompt = require("prompt-sync")();
// let Celsius = prompt("Enter the value of Celsius : ");
// let Fahrenheit = Celsius*1.8 + 32;
// console.log(Fahrenheit);

// // 11. ------Check Prime Number or not.........

// // const prompt = require("prompt-sync")();
// let n = prompt("Enter the number :");
// let  i, flag = true;
// // Getting the value form text
// // field using DOM
// // n = document.myform.n.value;
// // n = parseInt(n)

// for(i = 2; i <= n - 1; i++)
//     if (n % i == 0) {
//         flag = false;
//         break;
//     }
//     if(n == 1 && n < 1) {
//         console.log(n + "  not prime")
//     } else {
//         if (flag == true) {
//             console.log(n + " is prime");
//         } else
//             console.log(n + " is not prime");    
//     }

//     // 12. --------find factorial---------...

//     let number_1 = prompt("Enter the number :");
//     let fact = 1;
//     for(let i = number_1;i >=1;i--) {
//         fact = fact*i;
//     }
//     console.log("The factorial of "+ number_1 +" is : "  + fact);
    
//     // 13.---------Check Number is Perfect or Not------
    
//     let enterNumber = prompt("Enter the number : ");
//     let sum = 0;
//     for (let i = 1 ; i < enterNumber ; i++) {
//         if(enterNumber % i == 0) {
//            sum = sum + i;
//          }  
//     }
//     if(enterNumber == sum) {
//         console.log(enterNumber + " is perfect number.");
//     } else {
//         console.log(enterNumber + " is not perfect number.");
//     }

//     // 14.-----------Fibonacci Series-----------
    
//     let enterValue = prompt("Enter the value ");
//     let first_number = 0 , second_number = 1 , third_number ;
//     console.log("Fibonacci series is : ");
//     for(let i = 0 ; i <= enterValue ; i++) {
//         console.log(first_number);
//         third_number = first_number + second_number ;
//         first_number = second_number ;
//         second_number = third_number ;
//     }
    
// 15. .......Check Palindrome Number-------

