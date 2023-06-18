let employee = {
    name: "shaine, waters",
    streetAddress: "123 sesame street"
};
// 1. updateEmployeeWithKeyAndValue()
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
}
// 2. destructivelyUpdateEmployeeWithKeyAndValue()
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
// 3. deleteFromEmployeeByKey()
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
// 4. destructivelyDeleteFromEmployeeByKey()
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}