// обобщенные types

// синтаксис
type User<T> = {
    login: T;
    age: number;
};

// использование
const user: User<string> = {
    login: 'str',
    age: 52,
};

// использование с литералом
const user2: User<'str'> = {
    login: 'str',
    age: 52,
};

// обобщенные интерфейсы
interface IUser<T> {
    login: T;
    age: number;
}

interface UserWithParentsData<ParentsData> {
    login: string;
    age: number;
    parents: ParentsData;
}

// Ограничения дженериков (generic constrains)
// проблема в том, что в поле parents можно поместить все, что угодно
// поэтому следует ввести отдельный интерфейс

interface ParentsOfUser {
    mother: string;
    father: string;
}

interface UserWithParentsInterface {
    login: string;
    age: number;
    parents: ParentsOfUser;
}

// и расширить интерфейсы
interface UserWithAllInfoAboutParents<ParentsData extends ParentsOfUser> {
    login: string;
    age: number;
    parents: ParentsData;
}

// для ограничений можно использовать и примитивные типы, в т.ч. union

const depositeMoney = <T extends string | number>(amount: T): T => {
    return amount;
};

const money1 = depositeMoney('500');
const money2 = depositeMoney(500);
// const money3 = depositeMoney(true) - Error

// альтернативный вариант с использованием обычного union
const depoMoney = (amount: string | number): string | number => {
    return amount;
};

depoMoney('500');
depoMoney(500);

export {};
