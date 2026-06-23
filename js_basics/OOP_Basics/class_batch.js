class Batch {
    constructor(name){
        this.name = name;
    }
    static batchName = "playwright 2x"
    static getbatchName(){
        console.log ("Student batch name", Batch.batchName);
    }
    getStudentName(){
        console.log("The student name ", this.name);
    }
}
let name1 = new Batch("Alice");
let name2 = new Batch("Bob");
let name3 = new Batch("Harold");
let name4 = new Batch("Charlie");
let name5 = new Batch("David");
let name6 = new Batch("Eve");
let name7 = new Batch("George");
let name8 = new Batch("Henry");
let name9 = new Batch("Ivy");
let name10 = new Batch("John");

name1.getStudentName();
name2.getStudentName();
name3.getStudentName();
name4.getStudentName();
name5.getStudentName();
name6.getStudentName();
name7.getStudentName();
name8.getStudentName();
name9.getStudentName();
name10.getStudentName(); 

Batch.getbatchName();
