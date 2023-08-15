// ? - это оператор optional
type User = {
    login: string;
    password: string;
    age?: number;
    address?: string;
    parents?: {
        father?: string;
        mother?: string;
    };
};

// В функциях optional оператор устанавливается после аргументов и может быть использован в теле функции в виде цепочки свойств (optional chaining operator(ES2020)), т.е. если такого свойства нет, то будет возвращен undefined, а не ошибка

function sendUserData(obj: User, db?: string): void {
    console.log(obj.parents?.father?.toLowerCase, db?.toLowerCase);
}
