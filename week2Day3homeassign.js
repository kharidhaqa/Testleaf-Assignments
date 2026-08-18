//JS Functions - week 2 Day 3

function userProfile(name){
    console.log("Hello " + name + "!");
}
userProfile('Haridha')

// Arrow function

let double = (x)=> x*2
const result = (y) => {
    return y*2;
}
console.log(result(10))

function setTimeOut(){
    console.log("This message is delayed by 2 seconds ", )
}


function getuserData(name,age,b)
{
console.log("Name is "+name);
console.log("Age is "+age), 5000;
b();

}

getuserData('Test', 10,setTimeOut);


    

