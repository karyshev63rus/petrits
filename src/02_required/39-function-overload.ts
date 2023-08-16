// чтобы наглядно прописать и задокументировать все варианты использования функции, применяется их перегрузка
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); Ошибка. Ни одна перегрузка не ожидает 2 аргумента, но существуют перегрузки, которые ожидают либо 1, либо 3 аргумента.

export {};
