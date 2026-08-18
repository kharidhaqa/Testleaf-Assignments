// strings in JS - class assignment
let text = "testleaf";
let result = text.split("");
let reverse="";

//console.log(result);
//console.log(result.length);

for (i=result.length-1;i>=0;i--)
{
    reverse=reverse+result[i];
}
console.log(reverse);

if (text===reverse)
{
    console.log("The given text is palindrome");
}
else{
    console.log("The given text is not a palindrome");
}


// Looping statements - Print Odd Numbers - Week2 Day 1
console.log("Printing Odd Numbers from 1 to 25 :");
let num;
function printOddNumbers(num) {
    for (let num = 1; num<=25; num+=1) {
        if (num % 2 == 1){
            console.log('Odd number ', num);
        }
    }

}
printOddNumbers(num);

// String - Home assignment

console.log("String Assignment")
let string1 = "Hello World";
let string2 = (string1.split(" "));
console.log(string2[1]);
console.log(string2[1].length);

// Example 2
let string3 = " fly me to the moon ";
//console.log(string3.trimStart());
//console.log(string3.trimEnd());
let string4 = (string3.trim());
console.log(string4); // after trim
let string5 = string4.split(" ");
console.log("After split", string5);
console.log("Last word is" , string5[4]); // after split
console.log("Length of the word moon is" , string5[4].length); // length of last word

//Example 3
function isAnagram(str6,str7)
{
    const newstr6 = str6.toLowerCase();
    const newstr7 = str7.toLowerCase();

    const sorted1 = newstr6.split("").sort().join("");
    const sorted2 = newstr7.split("").sort().join("");
    
    console.log(sorted1);
    console.log(sorted2);
    
    console.log(sorted1===sorted2);

}
isAnagram("listen","silent");












