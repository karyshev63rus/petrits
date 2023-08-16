// случаются ситуации, что полученное откуда-то значение не соответствует ожидаемому типу
// механизм утверждения типа просит TS пересмотреть свое отношение к определенному типу

const fetchData = (url: string, method: 'GET' | 'POST'): void => {
    console.log(method);
};

const reqOptions = {
    url: 'https://ya.ru',
    method: 'GET',
};

fetchData('qqq', 'GET');
// fetchData(reqOptions.url, reqOptions.method); Error
fetchData(reqOptions.url, reqOptions.method as 'GET');

// способы решения на этапе формирования объекта
// 1)
const reqOptions2 = {
    url: 'https://ya.ru',
    method: 'GET' as 'GET',
};

fetchData(reqOptions2.url, reqOptions2.method);
//2)
const reqOptions3 = {
    url: 'https://ya.ru',
    method: 'GET',
} as const;

fetchData(reqOptions3.url, reqOptions3.method);

// альтернативный синтаксис утверждения типов (не работает в React)
fetchData(reqOptions3.url, <'GET'>reqOptions3.method);

// утверждение типов часто можно встретить при работе с DOM-деревом
const box = document.querySelector('.box') as HTMLElement;
const input = document.querySelector('input') as HTMLInputElement;
const input2 = <HTMLInputElement>document.querySelector('input');

export {};
