interface IelectricityUserData {
    readings: number;
    units: string;
    mode: string;
}

interface IwaterUserData {
    readings: number;
    units: string;
}

const electricityUserData: IelectricityUserData = {
    readings: 95,
    units: 'kWt',
    mode: 'double',
};

const waterUserData: IwaterUserData = {
    readings: 3,
    units: 'm3',
};

const elRate = 0.45;
const wRate = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
    elData: IelectricityUserData,
    wData: IwaterUserData,
    elRate: number,
    wRate: number
): void => {
    if (elData.mode === 'double' && elData.readings < 50) {
        monthPayments[0] = elData.readings * elRate * 0.7;
    } else {
        monthPayments[0] = elData.readings * elRate;
    }

    monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
    monthPayments: number[],
    electricityUserData: IelectricityUserData,
    waterUserData: IwaterUserData
): string => {
    const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;

    return text;
};
