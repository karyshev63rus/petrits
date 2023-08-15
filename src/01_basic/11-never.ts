const createError = (msg: string) => {
    throw new Error(msg);
};

const createNever = () => {
    while (true) {}
};

function logBrtMsg(isBirthDay: boolean, name: string, age: number) {
    if (isBirthDay === true) {
        return `Congrat ${name.toUpperCase()}, age ${age + 1}`;
    } else if (isBirthDay === false) {
        return 'Too bad';
    } else {
        return createError('Error');
    }
}
