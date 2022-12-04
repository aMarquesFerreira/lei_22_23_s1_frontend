import { render, screen, cleanup, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {API_BASE_URL} from '../../Config/config'
import axios from 'axios';


/*describe('expectedData', () => {
    it('checks if returned data from API rendered into component', async () => {
        nock('https://api.fake-rest.refine.dev')
            .defaultReplyHeaders({
                'access-control-allow-origin': '*',
            })
            .post('')
            .reply(200, {
                id: 1,
                firstName: "/value from the api",
            });
        render(<Main />);
        await waitFor(() => {
            expect(
                screen.getByText("/value from the api")
            ).toBeInTheDocument();
        });
    });
});*/
const initTruck = {
    enroll: '12-AD-89',
        year: 2020,
        month: 10,
        tare: 1,
        batteryCapacity: 1,
        totalBatterycapacity: 1,
        AutonomyWithMaximumLoad: 1,
        batteryChargingTime: 1
  };
describe('test save truck',  () =>{
    it('teste serviço post trcuks' , async () => {
        const response = await axios.post(`${API_BASE_URL}/vehicles/truck`, initTruck, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        expect(201).toBe(response.status);

    });
});