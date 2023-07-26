const express = require("express");
const employeeController = require("../controllers/employeeController");

const router = express.Router();


router.get("/", (req, res) => {
  res.send("Hello, this is the home page!");
});


router.get("/api/employees", employeeController.getAllEmployees);
router.get("/api/employees/:empId", employeeController.getEmployeeById);
router.post("/api/employees", employeeController.createEmployee);
router.put("/api/employees/:empId", employeeController.updateEmployee);
router.delete("/api/employees/:empId", employeeController.deleteEmployee);

module.exports = router;
