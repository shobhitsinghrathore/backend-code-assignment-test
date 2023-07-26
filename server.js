const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes");
const middleware = require("./middleware");

const app = express();
const PORT = 3000;

app.use(middleware.jsonParser);

app.get("/favicon.ico", middleware.faviconHandler);

app.use(employeeRoutes);

app.use(middleware.notFoundHandler);

app.use(middleware.errorHandler);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
