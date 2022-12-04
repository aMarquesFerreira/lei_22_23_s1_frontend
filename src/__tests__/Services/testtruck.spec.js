<<<<<<< HEAD
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { API_BASE_URL } from '../../Config/config';

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

=======

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
>>>>>>> c4349316ca4d9bbaa7d818f1aac5bee6ce97a44c
