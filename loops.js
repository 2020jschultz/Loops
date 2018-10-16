// For-loop functions

function positiveIntSum(limit){
let sum = 0;
let n = limit;
for(let i = 1; i < n; i++){
    sum = sum + i;
}
}


function additionPatternSum(start, diff, limit){

}




// While-loop function

function multiplicationPatternSum(/* Give it three inputs */){


}





//Later copy paste the checking code below here.
function check(){
    let smallLimit = 208;
    let mediumLimit = 1024;
    let largeLimit = 600000;//six hundred thousand

    let test1 = 21736 === positiveIntSum(smallLimit);
    let test2 = 180000300000 === positiveIntSum(mediumLimit);
    let test3 = 1770 === additionPatternSum(60,3,20);
    let test4 = 8375 === additionPatternSum(-200, 15, 50);
    let test5 = 12345678 === multiplicationPatternSum(1,3,largeLimit);
    let test6 = 12345678 === multiplicationPatternSum(5,2,largeLimit);
    let test7 = 12345678 === multiplicationPatternSum(2,-7,largeLimit);

    console.log(`The function positiveIntSum works properly: ${test1 && test2}`);
    console.log(`The function additionPatternSum works properly: ${test3 && test4}`);
    console.log(`The function positiveIntSum works properly: ${test5 && test6 && test7}`);
    
}