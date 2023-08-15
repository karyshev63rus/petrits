// Название псевдонима начинается с заглавной буквы

type AnimationTimingFunc = 'easy' | 'easy-out' | 'easy-in';
type AnimationID = string | number;

function createAnimaiton(
    id: AnimationID,
    timingFunc: AnimationTimingFunc = 'easy'
): void {
    console.log(`${id} ${timingFunc}`);
}

export {};
