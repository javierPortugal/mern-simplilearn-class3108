//function constructor

function    Employee(name, designation, yearOfBirth){
    this.name = name;
    this.designation = designation;
    this.yearOfBirth = yearOfBirth;
}

Employee.prototype.calculateAge = function(){
    console.log("The current age is: " +(2024 - this.yearOfBirth));
}

console.log(Employee.prototype);

let emp1 =new Employee('Alex', 'Developer', 1995);
console.log("Empleyee object: ", emp1);
emp1.calculateAge();

let emp2 =new Employee('Peter', 'Product owner', 1992);
console.log("Empleyee object: ", emp2);
emp2.calculateAge();

let emp3 =new Employee('John', 'tester', 1990);
console.log("Empleyee object: ", emp3);
emp3.calculateAge();