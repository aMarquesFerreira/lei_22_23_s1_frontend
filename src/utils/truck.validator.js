const validatorEnroll = (enroll) => {
  var str = enroll.toString();
  var offset = str.length % 2;
  var newStr = '';
  if (str !== 'NaN') {
    for (var i = 0; i < str.length; i++) {
      if (i > 0 && i % 2 === offset) {
        newStr += '-';
      }
      newStr += str[i];
    }
    return str.replace(/\D/g, '').length === 8;
  }
};

const validatorYear = (year) => {
  var current_year = new Date().getFullYear();
  if (current_year <= year || year >= 1990) return year?.toString().length === 4;
};

const validatorMonth = (month) => {
  if (month.toString() <= 12 && month.toString() >= 1) return month?.toString().length >= 1;
};

const validatorTare = (tare) => {
  return tare?.toString().length >= 1;
};

const validatorBatteryCapacity = (batteryCapacity) => {
  return batteryCapacity?.toString().length >= 1;
};

const validatorTotalBatterycapacity = (totalBatterycapacity) => {
  return totalBatterycapacity?.toString().length >= 1;
};

const validatorAutonomyWithMaximumLoad = (autonomyWithMaximumLoad) => {
  return autonomyWithMaximumLoad?.toString().length >= 1;
};

const validatorBatteryChargingTime = (batteryChargingTime) => {
  return batteryChargingTime?.toString().length >= 1;
};

export {
  validatorEnroll,
  validatorYear,
  validatorMonth,
  validatorTare,
  validatorBatteryCapacity,
  validatorAutonomyWithMaximumLoad,
  validatorBatteryChargingTime
};
