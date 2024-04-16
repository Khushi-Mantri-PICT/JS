//for in objects
const objecta={name:"abhi",age:21}
for(const key in objecta)
{
    console.log(key);//name
    console.log(objecta[key]); //abhi
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);//0
    //console.log(programming[key]);//js
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}