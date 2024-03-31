let a="33a"
let b=Number ("33a")
console.log( typeof b);
console.log( b);//NaN not in number format
//only if a=null we obtain 0 instead of NaN
//true=1 false=0 undeifned =NaN
let c=3
let d=Boolean(c)
console.log(d);//true
//false---0 ""empty string

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32

console.log(true);//true
console.log(+true);//1
console.log(+"");//0
//console.log(true+);//error