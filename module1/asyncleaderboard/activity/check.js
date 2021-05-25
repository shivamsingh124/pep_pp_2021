let arr=[];
let obj={
    name:9,
    runs:6
}
arr.push(obj);
for(let i=0;i<10;i++){
let obj={
    name:i,
    runs:6
}
arr.push(obj);
}
console.table(arr);