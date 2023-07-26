const Employee = require("../models/employee");
const DB = require("../utils/inMemoryDB");


const getAllEmployees = (req, res) => {
  const employees = DB.getAllEmployees();
  res.status(200).json(employees);
};

const getEmployeeById = (req, res) => {
  const empId = req.params.empId;
  const employee = DB.getEmployeeById(empId);
  if (employee) {
    res.status(200).json(employee);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
};

const createEmployee = (req, res) => {
  const employeeData = req.body;
  const { employeeName, age } = employeeData;

  if (!employeeName || !age) {
    res.status(400).json({ message: "employeeName and age are required fields" });
  } else {
    const employeeId = generateUniqueId();
    const employee = new Employee(employeeId, employeeName, age, employeeData.salaryAmount, employeeData.email, employeeData.degreeDetails);
    DB.createEmployee(employee);
    res.status(201).json({ message: "Employee created successfully" });
  }
};

const updateEmployee = (req, res) => {
  const empId = req.params.empId;
  const updatedEmployeeData = req.body;
  const isUpdated = DB.updateEmployee(empId, updatedEmployeeData);
  if (isUpdated) {
    res.status(200).json(updatedEmployeeData);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
};

const deleteEmployee = (req, res) => {
  const empId = req.params.empId;
  const isDeleted = DB.deleteEmployee(empId);
  if (isDeleted) {
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: "Employee not found" });
  }
};


const generateUniqueId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
