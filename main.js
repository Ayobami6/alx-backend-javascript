import getListStudents from './0x03-ES6_data_manipulation/0-get_list_students';
import getStudentIdsSum from './0x03-ES6_data_manipulation/3-get_ids_sum';

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
