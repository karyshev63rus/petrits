// null - отсутствие чего-либо полностью
// undefined - значит, что-то есть, но значение у него не определено

const test: null = null;
const test2: any = null;

const test3: undefined = undefined;
const test4: any = undefined;
// неправильно, например:
// const test: string = null
// const test: number = null
// const test: string = undefined
// const test: number = undefined
