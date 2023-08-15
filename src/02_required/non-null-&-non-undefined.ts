// ! - оператор Non-Null and Non-Undefined, используется для указания того, что точно существует. Даже если TS будет предупреждать об ошибке, оператор "!" отключит это поведение.

let dbName: string;
prntDbName('MySQL');

console.log(dbName!); // Без ! будет ошибка

function prntDbName(db?: string) {
    dbName = 'Postgres';
    console.log(db!.toLowerCase());
}
