// правила, позволяющие выводу типов определить суженый диапизон типов для значения,
// называются защитниками типа, type guards

function printMsg(msg: string[] | number | boolean): void {
    // type guard =>
    if (Array.isArray(msg)) {
        msg.forEach((el) => console.log(el));
        // type guard =>
    } else if (typeof msg === 'number') {
        console.log(msg);
    } else {
        console.log(msg);
    }
}

// пользовательские защитники типа

function isNumber(n: unknown): n is number {
    return typeof n === 'number';
}

function isStringArray(s: string[] | number | string): s is string[] {
    return Array.isArray(s);
}

// более продвинутые защитники определяют, к какому объекту относится эта сущность
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim() !== undefined;
}

function move(animal: Fish | Bird): void {
    if (isFish(animal)) {
        return animal.swim();
    } else {
        return animal.fly();
    }
}

interface Car {
    engine: string;
    wheels: number;
}

interface Ship {
    engine: string;
    sail: boolean;
}

function isCar(car: Car | Ship): car is Car {
    return 'wheels' in car;
}

function isShip(ship: Car | Ship): ship is Ship {
    return 'sail' in ship;
}

function repairVehicle(vehicle: Car | Ship): void {
    if (isCar(vehicle)) {
        vehicle.wheels;
    } else if (isShip(vehicle)) {
        vehicle.sail;
    } else {
        vehicle;
    }
}

export {};
