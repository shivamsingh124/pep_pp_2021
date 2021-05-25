// console.log(a);// error cannot access 
//  let a ;
// console.log(a);// undefined
// a=20;
// console.log(a); // 20
// console.log(a);// undefined 
//  var a ;
// console.log(a);// undefined
// a=20;
// console.log(a); // 2 0



// console.log(a);// undefined 
// var a = " Steve ";
// console.log(a);//steve 


//hoisting mechanism of accessing a variable before initializing 





// console.log(a)
// console.log(fun)
// fun();
// var a =20;
// var fun=function(){
//     console.log("fun says hi!")
// }

// var a = 20 ;
// console.log( a);
// if (true){
//     var a = 50; // same a of 33 rd  line 
//     console .log(a)
// }
// function callME(){
//     var a = 100;
//     console.log ( a);
// }
// callME();
// console.log (a)


// console.log(a);
// if (true){
//     let a = 50; // same a of 33 rd  line 
//     console .log(a)
// }
// let a = 20 ;
// function callME(){
//     console.log (this.a);
//     let a = 100;
    
// }
// callME();
// console.log (a)



// var name = " Steve "
// function fun (){          // closure = gec
//     var b = 70;
//     // console.log(name);
//     function y(){                // closure gec , fun
//         console.log(b)
//     }
//     b=100;
//     return y;
// }

// var newfun = fun ();
// newfun();