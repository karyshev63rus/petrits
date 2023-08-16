// unknown - типобезопасный аналог any
// опасность any в том, что это любой тип и никакие проверки типов в нем не выполняются
// а вот unknown - неизвестный тип

let smth: unknown;
smth = 'str';
// let data: string[] = smth; - будет ошибка: нельзя применять метод неизвестно к чему
// data.find(e => e)

// необходимо использовать сужение типов
function fetchData(data: unknown): void {
    if (typeof data === 'string') {
        console.log(data.toLowerCase());
    }
    data; // тут unknown
}

// можно использовать для работы с функциями, которые возвращают что-угодно
const userData = '{"isBirthdayData":true, "ageData":40, "userNameData":"John"}';

function safeParse(s: string): unknown {
    return JSON.parse(s);
}

const data = safeParse(userData);

function transferData(d: unknown): void {
    if (typeof d === 'string') {
        console.log(d.toLowerCase());
    } else if (typeof d === 'object' && d) {
        console.log(data);
    } else {
        console.log('some error');
    }
}

transferData(data);

export {};
