//Number Type
function checkNumber(num){
    if(num>0){
        console.log("The number is positive");
    }
    else if(num<0){
        console.log("The number is negative");
    }
    else{
        console.log("The number is zero");
    }
}
let num=7;
checkNumber(num);

//Conditional Statements - if else

function launchBrowser(browserName){
    if (browserName=="Chrome"){
        console.log("Launching Chrome Browser");
    }
    else{
        console.log("Not a Chrome browser");
    }

}
launchBrowser("Chrome");

//switch case

function runTests(){
    switch(testType){
        case "sanity":
            console.log("Running Sanity Tests");
            break;
        case "regression":
            console.log("Running Regression Tests");
            break;
        default:
            console.log("Running Smoke Tests");
    }
}
let testType="sanity";
runTests();

// Grade calculation using switch case

function calculateGrade(score){
    switch(true){
        case (score>=90):
            console.log("Grade A");
            break;
        case (score>=80):
            console.log("Grade B");
            break;
        case (score>=70):
            console.log("Grade C");
            break;
        default:
            console.log("Grade D");
    }
}
let score=65;
calculateGrade(score);  