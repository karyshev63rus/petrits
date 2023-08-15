// typeof
function prntMsg(msg: string | number): void {
    if (typeof msg == 'string') {
        console.log(msg.toLowerCase());
    } else {
        console.log(msg.toExponential());
    }
    console.log(msg);
}

//typeof || typeof
function prntMsg2(msg: string | number | boolean): void {
    if (typeof msg == 'string' || typeof msg == 'number') {
        console.log(msg.toString());
    } else {
        console.log(msg);
    }
    console.log(msg);
}

// Array.isArray()
function prntMsg3(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.map((item) => item.toUpperCase());
    } else if (typeof msg == 'number') {
        msg.toFixed();
    } else {
        console.log('msg is boolean');
    }
}

// ===
const printReadings = (a: string | number, b: number | boolean) => {
    if (a === b) {
        console.log(a, b);
    }
};

// in
const checkReadings = (
    readings: { system: number } | { text: string }
): void => {
    if ('system' in readings) {
        console.log(readings.system);
    } else {
        console.log(readings.text);
    }
};

// instanceof
function logValue(x: string | Date): void {
    if (x instanceof Date) {
        console.log(x.getDate());
    } else {
        console.log(x.toUpperCase());
    }
}

function prntSlice(data: string | number[]): void {
    console.log(data.slice(0, 3));
}

export {};
