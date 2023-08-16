function processingData<T, S>(data: T, options: S): T {
    return data;
}

const res1 = processingData(1, '1');
const res2 = processingData('1', '1');
const res3 = processingData<number, string>(1, '1');

// для выполнения операция с разными типами данных используется сужение типов
function processingValue<T, S>(data: T, options: S): string {
    switch (typeof data) {
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        default:
            return 'Not valid';
    }
}

function processingArr<T, S>(data: T[], options: S): T[] {
    return data;
}

const res4 = processingArr(['1', '2'], 'fast');
const res5 = processingArr([1, 2], 'slow');
const res6 = processingArr<number, string>([1, 2], 'mibble');

// для методов тот же синтаксис, что и для функций.
// если они прописаны в интерфейсе, то есть три варианта
interface DataSaver {
    processing: <T>(data: T) => T;
}
// 1)
const saver1: DataSaver = {
    processing: <T>(data: T) => {
        return data;
    },
};
saver1.processing(5);
// 2)
const saver2: DataSaver = {
    processing(data) {
        return data;
    },
};
saver2.processing(5);
const saver3: DataSaver = {
    processing: (data) => {
        return data;
    },
};
saver3.processing(5);

// в аннотации есть еще материал

export {};
