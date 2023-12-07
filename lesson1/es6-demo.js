class Person{
    constructor(){
        this.name = "bach";
        this.age = "20";
    }
    getName(){
        return this.name;
    }
    getAge(age){
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}
var person = new Person();
person.setAge(20);
console.log("ten :",person.getName());
console.log("tuoi :",person.getAge());

class Student extends Person {
    constructor(name,age,studentId){
        super(name,age);
        this.studentId="sv01";
    }
    getStudentInfo(){
        return "ten:"+this.getName()+" tuoi"+this.getAge()+"ma sv"+this.studentId;
    } 
}
var student =new Student();
console.log(student.getStudentInfo());