
const axios = require('axios');
const { truckSave, truckUpdate, truckGetById} = require('./../../Services/Truck');

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


  /*describe('update truck', () => {
    it('update truck', async () => {
      const res = { data: inTruck };
  
        const headers = {
          'Content-Type': 'application/json'
      };
      axios.put.mockResolvedValueOnce(res);
      const response = await truckUpdate(inTruck.enroll,inTruck, headers);
      
      
      expect(response.data.enroll).toBe(res.data.enroll);
    });
  });*/