// default parameter 
function add(num1, num2 = 0) {
        // num2 = num2 || 0;  
    return num1 + num2;
}
const total = add(15, 5);
console.log(total);

// string , multile string line
const firstName = "justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + " " +"is a good boy ";
fullName2 = `${firstName} ${lastName} is a good man`;

const multiLine = ` I love you
                I miss You
                No I dont need you :p`

console.log(fullName);
console.log(fullName2);
console.log(multiLine);

// arrow function, multiple parameter, function body ---- 
const doubleIt = num => num * 3;
const add2 = (x, y) => x + y;

const result2 = add2(50, 20);
const result = doubleIt(5);

console.log(result2);
console.log(result);

// long function body ---- 
const doMath = (x , y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath(7, 5);
console.log(result3);

// 
const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
const maximum = Math.min(...takaPoisa);
console.log(maximum);
//  class 
class Student{
    constructor (sID, sName){
        this.id = sID;
        this.name = sName;
        this.school = "police line high school"
    }
}
const student1 = new Student(12, "shuvo");
const student2 = new Student(22, "maya");
console.log(student1, student2);
//  inheritance function
class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";

    }

}
class Child extends Parent{
    constructor(name){
        super();
        this.childName = name;
    }
    getFullName(){
        return this.childName + " " + this.fatherName; 
    }
}
const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby2);
console.log(baby);
console.log(baby.getFullName());
