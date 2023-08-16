const arr: Array<number> = [1, 2, 3]; // обычный массив
const roarr: ReadonlyArray<string> = ['a', 'b', 'c']; // неизменяемый массив

// Readonly дженерик запрещает изменения только на первом уровне вложенности
interface IState {
    data: {};
    tag: string;
}

function action(state: Readonly<IState>) {
    // return (state.data = ''); Error
}

// Дженерик Partial добавляет всем свойствам объекта модификатор вопросительного знака (optional), делая их необязательными
interface IState2 {
    data: string;
    tag: string;
}

const state: Partial<IState2> = {
    data: 'John',
};

// Дженерик Required делает все поля обязательными
const strictState: Required<IState2> = {
    data: 'John',
    tag: 'boss',
};
