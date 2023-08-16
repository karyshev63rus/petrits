// механизм, который позволяет получить тип определенной сущности, называется запрос типа (type query)
// реализуется через typeof + сущность

const dataFromControl = {
    water: 200,
    el: 300,
};

function checkReadings(data: typeof dataFromControl): boolean {
    const dataFromUser = {
        water: 200,
        el: 300,
    };
    if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
        return true;
    } else return false;
}

export {};
