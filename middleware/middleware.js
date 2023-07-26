const bodyParser = require("body-parser");


const jsonParser = bodyParser.json();


const faviconHandler = (req, res) => {
  res.status(204).end();
};


const notFoundHandler = (req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
};


const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong" });
};

module.exports = {
  jsonParser,
  faviconHandler,
  notFoundHandler,
  errorHandler,
};
