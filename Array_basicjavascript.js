// 1.--------Find maximum Number -----------------
let arr = [2,3,1,0,12,34,21,44,23];
let maxNumber = arr[0];
 for(let i=0;i<arr.length;i++) {
    if(maxNumber<=arr[i]) {
        maxNumber = arr[i];
    }
 }
 console.log("The Maximum value is : " + maxNumber);

 // 2.-------Find minimum number------------

 let arr_ = [12,2,32,1,23,43,45,11,211,-1,-22];
 let minNumber = arr_[0];
  for(let i=0;i<arr_.length;i++) {
    if(minNumber>=arr_[i]) {
        minNumber = arr_[i];
    }
  }
  console.log("Minimum value is : " + minNumber);

// 3.--------Arrange Ascending Order---------

let arr_1 = [2,1,0,5,8,3,-3];
 for(let i=0;i<arr_1.length;i++) {
    for(let j=i+1;j<arr_1.length;j++) {
        if(arr_1[i]>arr_1[j]) {
           let temp = arr_1[i];
            arr_1[i] = arr_1[j];
            arr_1[j] = temp;
        }
    }
 }
 console.log(arr_1);

 // 4.-----------Arrange Descending Order------------

 let arr_2 = [2,4,1,6,5,0,9];
 for(let i=0;i<arr_2.length;i++) {
    for(let j=i+1;j<arr_2.length;j++) {
        if(arr_2[i] < arr_2[j]) {
            let temp = arr_2[i];
            arr_2[i] = arr_2[j];
            arr_2[j] = temp;
        }
    }
 }
 console.log(arr_2);