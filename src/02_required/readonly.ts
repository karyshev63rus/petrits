// readonly - модификатор типа. TS позволяет на уровне синтаксиса сказать, что свойства объекта, метод или массив являются неизменяемыми. Но после компилляции все они будут изменяемы, но на этапе разработки применение модификатора позволит избежать ошибки.

interface User {
    readonly login: string;
}

const user: User = {
    login: 'mick',
};

// user.login = 'dick' // "Не удается задать значение для "login", так как это свойство, доступное только для чтения"

const userFreeze: Readonly<User> = {
    login: 'bob',
};

// userFreeze.login = 'ann' // "Не удается задать значение для "login", так как это свойство, доступное только для чтения"

const arr: readonly number[] = [1, 2, 3];

// arr[0] = 4 // "Сигнатура индекса в типе "readonly number[]" разрешает только чтение"
// arr.push(5) - // "Свойство "push" не существует в типе "readonly number[]"

const basicPorts: ReadonlyArray<number> = [3000, 5000];

// basicPorts[0] = 3001 // "Сигнатура индекса в типе "readonly number[]" разрешает только чтение"
// basicPorts.push(5555) // Свойство "push" не существует в типе "readonly number[]"
