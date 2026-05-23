side1=8
side2=54
side3=6
if (side1+side2 <= side3 || side1+side3 <= side2 || side3+side2 <= side1 )
    console.log(`cannot form a tringle with ${side1},${side2} & ${side3}`);
else if(side1===side2 && side2===side3)
    console.log("Equilateral");
else if(side1===side2 || side2===side3)
    console.log("Isoceles");
else
    console.log("Scalene");

console.log(0 || 'hello')
