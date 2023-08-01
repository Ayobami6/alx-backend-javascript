const getListStudentIds = (array) => {
  const temp = array;
  const idList = [];
  if (temp instanceof Array) {
    temp.forEach((obj) => {
      idList.push(obj.id);
    });
  }
  return idList;
};

export default getListStudentIds;
