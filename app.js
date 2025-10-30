// Employee Management System using Node.js and Arrays

const readline = require("readline-sync");

let employees = [];

// Function to add a new employee
function addEmployee() {
  const id = readline.question("Enter Employee ID: ");
  const name = readline.question("Enter Employee Name: ");
  const role = readline.question("Enter Employee Role: ");
  const salary = readline.question("Enter Employee Salary: ");

  employees.push({ id, name, role, salary });
  console.log("✅ Employee added successfully!\n");
}

// Function to view all employees
function viewEmployees() {
  if (employees.length === 0) {
    console.log("No employees found.\n");
    return;
  }
  console.table(employees);
}

// Function to search employee by ID
function searchEmployee() {
  const id = readline.question("Enter Employee ID to search: ");
  const emp = employees.find((e) => e.id === id);
  if (emp) {
    console.log("Employee found:");
    console.table([emp]);
  } else {
    console.log("❌ Employee not found.\n");
  }
}

// Function to update employee details
function updateEmployee() {
  const id = readline.question("Enter Employee ID to update: ");
  const empIndex = employees.findIndex((e) => e.id === id);
  if (empIndex === -1) {
    console.log("❌ Employee not found.\n");
    return;
  }

  const name = readline.question("Enter new name: ");
  const role = readline.question("Enter new role: ");
  const salary = readline.question("Enter new salary: ");

  employees[empIndex] = { id, name, role, salary };
  console.log("✅ Employee updated successfully!\n");
}

// Function to delete employee
function deleteEmployee() {
  const id = readline.question("Enter Employee ID to delete: ");
  const index = employees.findIndex((e) => e.id === id);
  if (index === -1) {
    console.log("❌ Employee not found.\n");
    return;
  }
  employees.splice(index, 1);
  console.log("🗑️ Employee deleted successfully!\n");
}

// Main Menu
function mainMenu() {
  while (true) {
    console.log("\n=== Employee Management System ===");
    console.log("1. Add Employee");
    console.log("2. View All Employees");
    console.log("3. Search Employee");
    console.log("4. Update Employee");
    console.log("5. Delete Employee");
    console.log("6. Exit");

    const choice = readline.question("Enter your choice: ");

    switch (choice) {
      case "1":
        addEmployee();
        break;
      case "2":
        viewEmployees();
        break;
      case "3":
        searchEmployee();
        break;
      case "4":
        updateEmployee();
        break;
      case "5":
        deleteEmployee();
        break;
      case "6":
        console.log("Goodbye 👋");
        process.exit(0);
      default:
        console.log("Invalid choice. Please try again.\n");
    }
  }
}

mainMenu();
