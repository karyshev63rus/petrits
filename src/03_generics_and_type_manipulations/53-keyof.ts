// keyof - оператов, позволяющий получить все свойства объекта, все его ключи
interface ICompany {
    name: string;
    debts: number;
}

type CompanyKeys = keyof ICompany;

const keyName: CompanyKeys = 'name';
const keyDebts: CompanyKeys = 'debts';

function printDebts<T, K extends keyof T, S extends keyof T>(
    company: T,
    name: K,
    debts: S
) {
    console.log(`${company[name]} ${company[debts]}`);
}

const hh: ICompany = {
    name: 'HH',
    debts: 50000,
};

printDebts(hh, 'name', 'debts');

// в общем виде подход такой
function getValues<T>(obj: T, keys: keyof T): T[keyof T] {
    return obj[keys];
}

export {};
