const message: string | number = 5;

const messages: string[] | number[] = ['1', '2', '3'];

const data: (string | number)[] = ['Mick', 46];

function prntMsg(msg: string | number): void {
    console.log(msg);
}

prntMsg('Hi');
prntMsg(42);

export {};
