const loadDepartments = require('./departments');
const loadItems = require('./items');
const departmentDom = require('./departmentDom');
const data = require('./data');

const whenItemsLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  console.log('itemsData', itemsData);
};

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
  loadItems(whenItemsLoad, departmentMalfunction);
};

module.exports = {
  initializer,
};
