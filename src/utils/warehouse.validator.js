const validatorwarehouseIdentifier = (identifier) => {
  return indentifier?.toString().length === 3;
};

const validatorWarehouseDesignation = (designation) => {
  return designation?.toString().length === 1;
};

const validatorStreet = (street) => {
  return street?.toString().length >= 1;
};

const validatorDoorNumber = (doorNumber) => {
  return doorNumber?.toString().length >= 1;
};

const validatorZipCode = (zipCode) => {
  return batteryCapacity?.toString().length >= 1;
};

const validatorCity = (city) => {
  return city?.toString().length >= 1;
};

const validatorCountry = (country) => {
  return country?.toString().length >= 1;
};

const validatorCityNumber = (number) => {
  return number?.toString().length >= 1;
};

const validatorLatitude = (latitude) => {
  return latitude?.toString().length >= 1;
};

const validatorLongitude = (longitude) => {
  return longitude?.toString().length >= 1;
};

const validatorAltitude = (altitude) => {
  return altitude?.toString().length >= 1;
};

export {
  validatorStreet,
  validatorDoorNumber,
  validatorZipCode,
  validatorCity,
  validatorCountry,
  validatorCityNumber,
  validatorLatitude,
  validatorLongitude,
  validatorWarehouseDesignation,
  validatorAltitude
};
