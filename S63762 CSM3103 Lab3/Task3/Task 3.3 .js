// Create the Employee parent object
function Employee(employeeName, employeeId, salary) {
  this.employeeName = employeeName;
  this.employeeId = employeeId;
  this.salary = salary;
}

// Create the Manager child object that inherits from Employee
function Manager(employeeName, employeeId, salary, managerName, branch) {
  Employee.call(this, employeeName, employeeId, salary);
  this.managerName = managerName;
  this.branch = branch;
}

// Set up the inheritance
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// Create a new Manager object
var manager = new Manager("Ilham Hanina", "E123", 5700, "Imtiyaz Wizni", "Branch Promotion");

// Access and display the properties
console.log("Employee Name: " + manager.employeeName);
console.log("Employee ID: " + manager.employeeId);
console.log("Salary: $" + manager.salary.toFixed(2));
console.log("Manager Name: " + manager.managerName);
console.log("Branch: " + manager.branch);


