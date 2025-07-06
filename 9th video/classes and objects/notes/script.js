// // const student = {
// //     fullName : "Prachurjo Choudhuri",
// //     marks : 100,
// //     age : 19,
// //     printMarks: function(){
// //         console.log("marks =",this.marks);
// //     }
// // };

// // const employee = {
// //     calcTax(){
// //         console.log("tax rate is 10 percent");
// //     }
// // };

// // const Prachurjo = {
// //     salary : 1000000,
// //     calcTax(){
// //         console.log("tax rate is 20 percent"); // when object and prototype both have same method, object's method is preferred
// //     }
// // };

// // const Sagnik = {
// //     salary : 1000000
// // }

// // Prachurjo.__proto__=employee;
// // Sagnik.__proto__ = employee;

// class class11{

//      constructor(name, age){
//         console.log(`new student ${name} registered of age ${age}`);
//         this.age = age;
//      }

//     physicsChapters(){
//         console.log("Mechanics,Thermal Physics,Waves");
//     }

//     mathsChapters(){
//         console.log("Coordinate Geometry,PNC,Trigonometry");
//     }
//     studentName(name){
//         this.name = name;
//     }

//     studentStream(stream){
//         this.stream = stream;
//     }
    
// }

// let student1 = new class11("Prachurjo",17);
// student1.studentName("Prachurjo");
// student1.studentStream("science");
// let student2 = new class11("Aishwaria",17);
// student2.studentName("Aishwaria");
// student2.studentStream("Commerce");

class class11{
    constructor(name,age,section){
        this.schoolName = "Stepping Stone Model School";
        this.name = name;
        this.age = age;
        this.section = section;
    }
    
     setmarks(pm,cm,mm){
        this.marks = {
            physics : pm,
            chemistry : cm,
            maths : mm
        }
     }
    
}

let student1 = new class11("Prachurjo",17,"C");
student1.setmarks(98,97,92);

// inheritance is passing down properties and methods from parent class to child class.
class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{}
let obj = new Child();

class Person{
    constructor(name){
        console.log("Enter parent constructor");
        this.nationality = "Indian";
        this.name = name;
        console.log("leave parent constructor");
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

    work(){
        console.log("no work"); // if child and parent have same method then
        //child's method is used.This is called method overriding
    }
}

class Engineer extends Person{
    constructor(name){
        console.log("Enter child constructor");
        super(name); // invoking parent class constructor
        console.log("leave child constructor");

    }
    work(){
        super.eat();
        console.log("solve problems,build something");
    }
}

let Prachurjo = new Engineer("Prachurjo");