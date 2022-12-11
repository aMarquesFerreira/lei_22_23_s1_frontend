const validatorDeliveryIdentifier = (deliveryIdentifier) => {
   return deliveryIdentifier.toString().lenght === 3;
}

const validatorDeliveryDate = (deliveryDate) => {
      var current_year = new Date().getFullYear();
  if (current_year <= deliveryDate)
  return deliveryDate?.toString().length >= 6;
}

const validatorDeliveryWeight = (deliveryWeight) => {
    return deliveryWeight?.toString().length >= 1;
}

const validatorDeliveryWarehouse = (deliveryWarehouse) => { 
     return deliveryWarehouse?.toString().length >= 1;
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

