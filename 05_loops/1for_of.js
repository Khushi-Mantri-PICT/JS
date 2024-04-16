//for of ...arrays maps strings sets
const arr=[1,2,3,4,5]
for(const i of arr)
{
    //console.log(i);
}
const str="hello world"
for(const i of str)
{
    //console.log(i);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


//console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
}
//not on objects as objects are not iterable
const objecta={name:"abhi",age:21}
for(const key of objecta)
{
    console.log(key);
}
