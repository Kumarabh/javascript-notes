const organisation = {
  orgId: 'ORG101',
  orgName: 'ABC Pvt Ltd.'

}

// ---------------------------------------- Classical method

// Example: 1

// const department = {
//   deptId: 'Dept101',
//   deptName: 'Computer science'

// }

// department.__proto__ = organisation;
// console.log(department.orgId);



// ---------------------------------------- Standard method

// Example: 1

// const department = Object.create(organisation);

// console.log(department.orgId);
// console.log(department.orgName);
// console.log(Object.getPrototypeOf(department) === organisation);// true


// Example: 2

const department = Object.create(organisation, {
  deptId: { value: 'Dept101', enumerable: true },
  deptName: { value: 'Computer science', enumerable: true }

});

console.log(department.orgId);
