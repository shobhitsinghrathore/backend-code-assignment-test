const Employee = require("../models/employee");

const employees = [];

const getAllEmployees = () => {
  return employees;
};

const getEmployeeById = (empId) => {
  return employees.find((employee) => employee.employeeId === empId);
};

const createEmployee = (employee) => {
  employees.push(employee);
};

const updateEmployee = (empId, updatedEmployee) => {
  const index = employees.findIndex((employee) => employee.employeeId === empId);
  if (index !== -1) {
    employees[index] = { ...updatedEmployee, employeeId: empId };
    return true;
  }
  return false;
};

const deleteEmployee = (empId) => {
  const index = employees.findIndex((employee) => employee.employeeId === empId);
  if (index !== -1) {
    employees.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
