// создание комплексного интерфейса на основе частных может привести к скрытым ошибкам,
// поэтому создание такого интерфейса не желательно

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

// комплексный интерфейс как попытка объединить частные интерфейсы
interface ComplexVehicle {
    name: 'car' | 'ship';
    engine: string;
    wheels?: number;
    sail?: boolean;
}

export {};
