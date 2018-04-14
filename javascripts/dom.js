const departmentOutputDiv = document.getElementById('departments');

// call domString function
const domString = (departments) => {
  let domStringBuild = '';
  departments.forEach((department) => {
    domStringBuild += `<div class="col-sm-3 department">`;
    domStringBuild +=   `<h3 class="hide">${department.name}</h3>`;
    domStringBuild +=   `<img class="department-image" src="${department.img}">`;
    domStringBuild += `</div>`;
  });
  return domStringBuild;
};

// print to dom function
const printToDom = (departments) => {
  departmentOutputDiv.innerHTML = domString(departments);
};

module.exports = printToDom;
