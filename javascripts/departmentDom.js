const events = require('./events');
const departmentOutputDiv = document.getElementById('departments');

// call domString function
const domString = (departments) => {
  let domStringBuild = '';
  departments.forEach((department) => {
    domStringBuild += `<div class="col-sm-3 department">`;
    domStringBuild +=   `<h3 class="department-title hide" data-department-id="${department.id}">${department.name}</h3>`;
    domStringBuild +=   `<img class="department-image" src="${department.img}">`;
    domStringBuild += `</div>`;
  });
  return domStringBuild;
};

// print to dom function
const printToDepartmentDom = (departments) => {
  departmentOutputDiv.innerHTML = domString(departments);
  events.addDepartmentEvents();
};

module.exports = printToDepartmentDom;
