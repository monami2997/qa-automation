class Calculator{
    add(a,b){
        console.log("The sum is ",a+b);
    }
    substract(a,b){
        console.log("The substraction is ",a-b);
    }
    mutiply(a,b){
        console.log("The multiplication is ",a*b);
    }
    modulus(a,b){
        console.log("The modulus is ",a%b);
    }
    divide(a, b) {
        console.log("The division is ",a / b);
    }
}

let cal= new Calculator();
cal.add(2,3);
cal.substract(9,5);
cal.mutiply(6,7);
cal.divide(7,2);
cal.modulus(8,3);