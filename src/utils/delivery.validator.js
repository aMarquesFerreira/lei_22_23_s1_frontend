const validatorDeliveryIdentifier = (deliveryIdentifier) => {
    console.log(deliveryIdentifier + ' is not a valid delivery identifier');
    return deliveryIdentifier?.toString().length === 3;
}

const validatorDeliveryDate = (deliveryDate) => {
    var current_year = new Date().getFullYear().getMonth().getDay();
    if (deliveryDate <= current_year) {
        return "invalid date!";
    }
    return deliveryDate?.toString().length >= 2;
}

const validatorDeliveryWeight = (deliveryWeight) => {
    return deliveryWeight?.toString().length >= 1;
}

const validatorDeliveryWarehouse = (deliveryWarehouse) => {
    return deliveryWarehouse?.toString().length === 3;
}

const validatorTimeLoadTruck = (timeLoadTruck) => {
    return timeLoadTruck?.toString().length === 2;
}


const validatorTimeUnloadTruck = (timeUnloadTruck) => {
    return timeLoadTruck.toString().lenght === 2;
}
export {
    validatorDeliveryIdentifier,
    validatorDeliveryDate,
    validatorDeliveryWeight,
    validatorDeliveryWarehouse,
    validatorTimeLoadTruck,
    validatorTimeUnloadTruck
}

