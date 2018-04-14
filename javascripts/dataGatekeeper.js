const loadDepartments = require('./departments');
const departmentDom = require('./departmentDom');
const data = require('./data');

const departmentSuccess = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
};

const departmentMalfunction = function () {
  console.error('shit broke, dawg');
};

const initializer = () => {
  loadDepartments(departmentSuccess, departmentMalfunction);
};

module.exports = {
  initializer,
};
