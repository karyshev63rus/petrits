// void указывается в том случае, когда все равно, что функция возвращает (но для этого необходимо определить конкретный отдельный тип, в нашем случае voidFunc)

type voidFunc = () => void;

const retString: voidFunc = () => {
    return 'string';
};

const s = retString();

const retNum: voidFunc = () => {
    return 5;
};

const n = retNum();
