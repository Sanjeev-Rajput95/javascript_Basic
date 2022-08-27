// 1.--------Find maximum Number -----------------
let arr = [2,3,1,0,12,34,21,44,23];
let maxNumber = arr[0];
 for(let i=0;i<arr.length;i++) {
    if(maxNumber<=arr[i]) {
        maxNumber = arr[i];
    }
 }
 console.log("The Maximum value is : " + maxNumber);

//  // 2.-------Find minimum number------------

//  let arr_ = [12,2,32,1,23,43,45,11,211,-1,-22];
//  let minNumber = arr_[0];
//   for(let i=0;i<arr_.length;i++) {
//     if(minNumber>=arr_[i]) {
//         minNumber = arr_[i];
//     }
//   }
//   console.log("Minimum value is : " + minNumber);

// 3.--------Arrange Array Ascending Order---------

// let arr_1 = [2,1 ,8,5,9,0,4];
//  for(let i=0;arr.length;i++) {
//     for(let j=i+1;arr.length;j++) {
//         if(arr[i]>arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//  }
//  console.log(arr)