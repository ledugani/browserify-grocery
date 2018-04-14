const loadDepartments = require('./departments');
const printToDom = require('./dom');

let departmentArray = [];

const departmentSuccess = function () {
  departmentArray = JSON.parse(this.responseText).departments;
  printToDom(departmentArray);
};

const departmentMalfunction = function () {
  console.error('shit broke, dawg');
};

const initializer = () => {
  loadDepartments(departmentSuccess, departmentMalfunction);
};

const getDepartments = () => {
  return departmentArray;
};

module.exports = {
  initializer,
  getDepartments,
};
