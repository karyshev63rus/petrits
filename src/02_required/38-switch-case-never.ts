interface Car {
    name: 'car';
    engine: string;
    wheels: number;
}

interface Ship {
    name: 'ship';
    engine: string;
    sail: boolean;
}

interface Airplane {
    name: 'airplane';
    engine: string;
    wings: string;
}

type Vehicle = Car | Ship | Airplane;

// можно создать несколько type guards
function isShip(ship: Vehicle): ship is Ship {
    return 'sail' in ship;
}

function isCar(car: Vehicle): car is Car {
    return 'wheels' in car;
}

function isAirplane(airplane: Vehicle): airplane is Airplane {
    return 'wings' in airplane;
}

// можно объединить их через switch-case
function repairVehicle(vehicle: Vehicle) {
    switch (vehicle.name) {
        case 'car':
            console.log(vehicle.wheels);
            break;
        case 'ship':
            console.log(vehicle.sail);
            break;
        case 'airplane':
            console.log(vehicle.wings);
            break;
        default:
            const smth: never = vehicle;
            console.log(`Ouuuups! This is ${smth}`);
    }
}

export {};
