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

