//   *

//  ***

// ***** 

let n= 5;
for (let i = 1; i <= n; i++) {
    let row = " "; 
    for (let j = 0; j <= n - 1 - i; j++) {
        row += " ";
    }
    for (let k = 0; k < i; k++) {
        row += "* ";
    }   
    console.log(row);
}