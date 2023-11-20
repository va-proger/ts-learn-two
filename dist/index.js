"use strict";
const userData = {
    isBirthday: true,
    age: 40,
    userName: "John",
    messages: {
        error: 'Error isBirthday: false'
    }
};
// tuple - строгий порядок (требуется доп комментарии из за свой не наглядной информации о переменных)
const userDataTuple = [true, 40, "John", "Alex", "Anna"];
// userDataTuple[0] = 'true';
const res = userDataTuple.map((t) => `${t} - data`);
const [birthday, age, userName] = userDataTuple;
console.log(res, birthday, age, userName);
const creatError = (msg) => {
    throw new Error(msg);
};
function logBrtMsg({ isBirthday, userName, age, messages: { error } }) {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    }
    else {
        return creatError(error);
    }
}
console.log(logBrtMsg(userData));
const departments = ["dev", "design", "marketing"];
const department = departments[0];
// departments.push(5)
const report = departments
    .filter((d) => d !== 'dev')
    .map((d) => `${d} = done`);
const nums = [[3, 5, 6], [3, 5, 6]];
const [first] = report;
console.log(first);
