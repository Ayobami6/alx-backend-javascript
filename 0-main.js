/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import createReportObject from './0x00-ES6_basic/12-createReportObject';
import createEmployeesObject from './0x00-ES6_basic/11-createEmployeesObject';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
