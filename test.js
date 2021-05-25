// const num = 5;
// console.log(num + 5);
// let a = 6;
// a = a + num;
// console.log(num - a);






// let a = 2;
// {
//   let a = 3;
//   {
//     let a = 4;
//     {
//       let a = 5;
//       console.log(a);
//     }
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);





let obj =[
    { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
    { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
  ];
  let arr1=[];
  for(let i=0;i<obj.length;i++){
    let arr= obj[i].rainfall;
    arr1.push(arr);
    
  }
  let sum=0,avg=0,n=0;
//let arr= 

for(let i=0;i<arr1.length;i++){
    let arr2=arr1[i];
    for(let j=0;j<arr2.length;j++){
     sum=sum+arr2[j];
     n++;

    }avg=sum/n;
    //console.log(avg);  
    n=0;sum=0; 
    obj[i].avgrainfall=avg;
delete obj[i].rainfall;
}

console.log(obj);




// let arr = [1, 2, 3];
// (function () {
//   for (x in arr) arr.unshift(arr.pop());
//   console.log(arr);
// })();

// let randomAdder = function (arr = ["a", "b"]) {
//   arr[arr.length * arr.length] = arr.length * arr.length;
// };

// randomAdder(arr);
// randomAdder();

// console.log(arr[9]);
// console.log(arr[8]);






// if ((-100 && 100 && "0") || [] === true || 0) 
//     console.log(1);
//     if ([] || (0 && false)) 
//       console.log(2);





// (function () {
//     if ((-100 && 100 && "0") || [] === true || 0) {
//       console.log(1);
//       if ([] || (0 && false)) {
//         console.log(2);
//       }
  
//       if (Infinity && NaN && "false") {
//         console.log(3);
//         if ("") {
//           console.log(4);
//         }
//       } else {
//         console.log(5);
//         if (({} || false === "") && !(null && undefined)) {
//           console.log(6);
//         }
//       }
//     } else {
//       console.log(7);
//     }
//   })();
  
// let a = "This only works if and only if";
// let b = a.slice(a.indexOf("only"));
// let c = b.lastIndexOf("only");


// console.log(b);
// b[0] = "i";

// //console.log(a);
// console.log(b);




// function f() {
//     console.log(arguments);
//   }
  
//   function f(a, b) {
//     return a + b;
//   }
  
//   console.log(f(2, 3, 4, 5));
  
//   function f(x, y, z, t) {
//       return x + y + z + t;
//   }
  
//   console.log(f(2, 3, 4, 5));



// console.log(a);
//f(2, 3, 4, 5);

// var a = 1;
// var a = 2;
// console.log(a);
// let b = 2;
// console.log(b);


// function f() {
//   console.log(arguments);
// }

// let obj = {"concept":""};


// console.log(
//   JSON.parse(
//     JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12)
//   ).concept
// );

// let a;
// console.log(a);

// function A() {
//   let a = 2;
//   console.log(a);

//   function C() {
//     console.log(a);

//     function D() {
//       console.log(a);

//       a = 2;
//     }
//     D();
//     a = 3;
//   }
//   C();       // a==2why not 3?

// }

// function B() {
//   let a;
//   console.log(a);
  
//   function E() { ////automatic call when b called ??????
//     a = 6;
//     console.log(a);
    
//   }
  
//   a = 2;
//   E();
//   console.log(a);
// }

// function F() {
//   console.log(a);
//   a = 2;
// }

// a = 3;

// F();
// B();
// A();

