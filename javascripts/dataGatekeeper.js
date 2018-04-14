const loadDepartments = require('./departments');
const departmentDom = require('./departmentDom');

const departmentSuccess = function () {
  const data = JSON.parse(this.responseText).departments;
  departmentDom(data);
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
