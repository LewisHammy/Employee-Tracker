const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');
const consoleTable = require('console.table');
// if it doesn't work try "" instead of ''
const util = require('util');

// boilerplate 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeeDB'
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log(' ');
    start();
  });

// connection query
const queryAsync = util.promisify(connection.query).bind(connection);

// user list 
async function start() {
	const answer = await inquirer.prompt({
		name: 'selectOption',
		type: 'list',
		message: 'What would you like to do?',
		choices: [
			'View All Departments',
			'View All Roles',
			'View All Employees',
			'Add A Department',
			'Add A Role',
			'Add An Employee',
			'Delete A Department',
			'Delete A Role',
			'Delete An Employee',
			'Update A Role\'s Salary',
			'Update An Employee\'s Role',
			'Update An Employee\'s Manager',
			'Exit'
		]
	});
	switch (answer.selectOption) {
		case 'View All Departments':
			viewDepartments();
			break;
		case 'View All Roles':
			viewRoles();
			break;
		case 'View All Employees':
			viewEmployees();
			break;
		case 'Add A Department':
			addDepartment();
			break;
		case 'Add A Role':
			addRole();
			break;
		case 'Add An Employee':
			addEmployee();
			break;
		case 'Delete A Department':
			deleteDepartment();
			break;
		case 'Delete A Role':
			deleteRole();
			break;
		case 'Delete An Employee':
			deleteEmployee();
			break;
		case 'Update A Role\'s Salary':
			updateSalary();
			break;
		case 'Update An Employee\'s Role':
			updateRole();
			break;
		case 'Update An Employee\'s Manager':
			updateManager();
			break;
		case 'Exit':
			console.log(' ');
			connection.end();
			break;
	}
};

// console.table everything in the department table
async function viewDepartments() {
	const res = await queryAsync('SELECT * FROM department');
	const allDepartments = [];
	console.log(' ');
    for (let i of res) {
	    allDepartments.push({ ID: i.id, NAME: i.name });
    }
    console.table(allDepartments);
    start();
};

// console.table 
async function viewRoles() {
    const res = await queryAsync('SELECT role.id, role.title, role.salary, department.name FROM role INNER JOIN department ON role.departmentId = department.id');
    const allRoles = [];
    console.log(' ');
    for (let i of res) {
        allRoles.push({ ID: i.id, TITLE: i.title, SALARY: i.salary, DEPARTMENT: i.name });
    }
    console.table(allRoles);
    start();
};

