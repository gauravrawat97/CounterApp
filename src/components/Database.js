import Realm from 'realm';

const EmployeeSchema = {
  name: 'Employee',
  properties: {
    empID: 'int',
    name: 'string',
    designation: 'string',
    salary: 'int',
  },
  primaryKey: 'empID',
};

let realm = new Realm({schema: [EmployeeSchema], schemaVersion: 1});

let getAllEmployees = () => {
  return realm.objects('Employee');
};

let addEmployee = (empID, name, designation, salary) => {
  console.log(realm.objects('Employee'));
  realm.write(() => {
    const newEmp = realm.create('Employee', {
      empID: Number(empID),
      name: name,
      designation: designation,
      salary: Number(salary),
    });
  });
};

let sortData = (order) => {
  const empData = realm.objects('Employee');
  if (order === 'asc') {
    return empData.sorted('salary');
  } else {
    return empData.sorted('salary', true);
  }
};

let searchData = (name) => {
  const empData = realm.objects('Employee');
  return empData.filtered(`name BEGINSWITH '${name}'`);
};

let deleteData = () => {
  realm.write(() => {
    realm.deleteAll();
  });
};
export {getAllEmployees, addEmployee, sortData, searchData, deleteData};
