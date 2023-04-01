// Объект
const userData = {
    isBirthDay: true,
    ageData: 40,
    userNameData: 'John',
};
// Его аннотация при использовании в функции
const logBrtMsg = (data: {
    isBirthDay: boolean;
    ageData: number;
    userNameData: string;
}): string => {
    return data.userNameData;
};

// Деструктуризация
const logBrtMsgDestr = ({
    isBirthDay,
    ageData,
    userNameData,
}: {
    isBirthDay: boolean;
    ageData: number;
    userNameData: string;
}): string => {
    if (isBirthDay) {
        return `${userNameData} ${ageData}`;
    } else {
        return 'Oops';
    }
};
