const loadDepartments = require('./departments');

let departmentArray = [];

const departmentSuccess = function () {
  departmentArray = JSON.parse(this.responseText).departments;
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
