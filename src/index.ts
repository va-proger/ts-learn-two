const userData = {
    isBirthday: true,
    age: 40,
    userName: "John",
    messages: {
        error: 'Error isBirthday: false'
    }
}

// tuple - строгий порядок (требуется доп комментарии из за свой не наглядной информации о переменных)
const userDataTuple:[boolean, number, ...string[]] = [true, 40, "John", "Alex", "Anna"];
// userDataTuple[0] = 'true';

const res: string[] = userDataTuple.map((t) => `${t} - data`);

const [birthday, age, userName] = userDataTuple
console.log(res, birthday, age, userName)
const creatError = (msg: string) => {
    throw new Error(msg);
};

function logBrtMsg({
   isBirthday,
   userName,
   age,
   messages: {error}
}: {
    isBirthday: boolean,
    userName: string,
    age: number,
    messages: { error: string}
}): string {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`
    } else {
        return creatError(error);
    }


}

console.log(logBrtMsg(userData));
const departments: string[] = ["dev", "design", "marketing"];
const department: string = departments[0];
// departments.push(5)
const report = departments
    .filter((d: string) => d !== 'dev')
    .map((d: string) => `${d} = done`);
const nums: number[][] = [[3, 5, 6], [3, 5, 6]];


const [first] = report;
console.log(first)