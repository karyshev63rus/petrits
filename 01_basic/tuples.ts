const userDataTuple: [boolean, number, string] = [true, 46, 'Mick'];
const [isBirthDay, age, userName] = userDataTuple;
const userDataTupleStrings: [boolean, number, ...string[]] = [
    true,
    46,
    'Mick',
    'Dick',
];
const userDataTupleBooleans: [...boolean[], number, string] = [
    true,
    false,
    46,
    'Mick',
];
const userDataTupleNumbers: [boolean, ...number[], string] = [
    true,
    46,
    76,
    'Mick',
];
