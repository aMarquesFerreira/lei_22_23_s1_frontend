const { truckSave, truckUpdate, truckGetById } = require('./../../Services/Truck');
const axios = require('axios');
const { truckSave, truckUpdate, truckGetById } = require('./../../Services/Truck');

test('the data is peanut butter', async () => {
  const res = await request(app)
    .post('/http://localhost:3000/api/vehicles/truck')
    .set('Accept', 'application/json')
    .send({
      enroll: '12-AD-89',
      year: 2020,
      month: 10,
      tare: 1,
      batteryCapacity: 1,
      totalBatterycapacity: 1,
      AutonomyWithMaximumLoad: 1,
      batteryChargingTime: 1
    });

  expect(res.status).toBe(200);
});


jest.mock('axios');
const inTruck = {
  enroll: '12-AD-89',
  year: 2020,
  month: 10,
  tare: 1,
  batteryCapacity: 1,
  totalBatterycapacity: 1,
  AutonomyWithMaximumLoad: 1,
  batteryChargingTime: 1
};

describe('test save truck', () => {
  it('teste serviço post trcuks', async () => {
    const res = { data: inTruck };

    const headers = {
      'Content-Type': 'application/json'
    };
    axios.post.mockResolvedValueOnce(res);
    const response = await truckSave(inTruck, headers);

    expect(response).toBe(res);
  });
});
