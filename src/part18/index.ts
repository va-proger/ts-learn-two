// примитивные литеральные числа

let msg: 'Hello' = 'Hello';

msg = 'Hello'; // примитивный литеральный тип - строго один тип

const port3000: number = 3000;
const port3001: number = 3001;

function  startServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' {
    if(port === port3000 || port3001 === port3001){
        console.log(`Server started on ${protocol}://server${port}`);
    }else {
        console.log("Invalid port");
    }
    return 'Server started';
}

startServer('https', 3001);

type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in' ; // обязательно type - и начинается с большой буквы
type AnimationId = string | number;

function createAnimation(
    id: AnimationId,
    animName: string,
    timingFunc: AnimationTimingFunc = 'ease', // псевдоним типа
    duration: number,
    iterCount: 'infinite' | number
): void{
    // const elem = document.querySelector(`#${id}`) as HTMLElement;

    // if (elem) {
    //     elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
        console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
    // }

}

createAnimation('id', 'fade', 'ease-in', 5, 'infinite')