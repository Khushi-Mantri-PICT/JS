//without semicolon also work
//uninitialized variable is undefined
const a=1;
//a=4 not valid as const
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
    console.log(d);//valid even outside the scope old javasxxcript 
    //console.log(e)//not valid
}
myfun();