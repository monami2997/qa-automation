side1=56
side2=54
side3=58

if(side1===side2 && side2===side3 && side1===side3)
    console.log("Equilateral");
else if(side1===side2 || side2===side3)
    console.log("Isoceles");
else
    console.log("Scalene");
