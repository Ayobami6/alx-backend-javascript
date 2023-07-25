import getFullResponseFromAPI from './0x01-ES6_promise/1-promise';

console.log(`This is the resolved object ${getFullResponseFromAPI(true)}`);
const result = getFullResponseFromAPI(true).then((data) => {
  console.log(data.status);
});
console.log(result); // this will show promise status
// console.log(getFullResponseFromAPI(false));
