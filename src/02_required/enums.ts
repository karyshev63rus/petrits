// Перечисления позволяют избегать опечаток и сторонних вариантов

enum Directions { // стандартный enum (числовой) с автоматической нумерацией значений
    TOP,
    RIGTH,
    BOTTOM,
    LEFT,
}

enum TimigFunc { // строковый enum
    EASE = 'ease',
    EASE_IN = 'ease-in',
    LINEAR = 'linear',
}

enum TimigFuncNum { // числовой enum с установленными значениями и вычислением для получения нового значения
    EASE = 1,
    EASE_IN = 2,
    LINEAR = 10,
    SQUARE = LINEAR ** 2,
}

function frame(el: string, dir: Directions, tFunc: TimigFunc): void {
    if (Directions.RIGTH) {
        console.log(tFunc);
    }
}

frame('id', Directions.RIGTH, TimigFunc.LINEAR);

// Существуют константные перечисления, которые после компилляции не преобразуются в функции, что немного ускоряет их работу в конечном коде

const enum Directions2 {
    TOP,
    RIGTH,
    BOTTOM,
    LEFT,
}
