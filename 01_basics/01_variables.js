//semicolon not mandatory
//uninitialized variable value undefined
const a=1;
let b=2;
var c=3;
d=4;//global declaration possible
console.table([a,b,c]);

function myfun()
{
    if(true)
    {
        var d=4;
        let e=5;
        console.log(e);
    }
    console.log(d);
}
myfun();