"use strict";
// примитивные литеральные числа
let msg = 'Hello';
msg = 'Hello'; // примитивный литеральный тип - строго один тип
const port3000 = 3000;
const port3001 = 3001;
function startServer(protocol, port) {
    if (port === port3000 || port3001 === port3001) {
        console.log(`Server started on ${protocol}://server${port}`);
    }
    else {
        console.log("Invalid port");
    }
    return 'Server started';
}
startServer('https', 3001);
function createAnimation(id, animName, timingFunc = 'ease', // псевдоним типа
duration, iterCount) {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;
    // if (elem) {
    //     elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
    console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
    // }
}
createAnimation('id', 'fade', 'ease-in', 5, 'infinite');
