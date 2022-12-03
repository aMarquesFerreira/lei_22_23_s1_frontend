import { render, screen, cleanup, fireEvent} from '@testing-library/react';
import TruckAddTruck from '../Truck/AddTruck';
import App from './App';
import userEvent from '@testing-library/user-event';

/*test("test", () =>{
    render(<TruckAddTruck />);
    const submitebutton = screen.getByTestId("Submit");
    const enroll = screen.getByPlaceholderText("Enter enroll");
    userEvent.type(enroll, "12-HT-12");
    const year = screen.getByPlaceholderText("Enter year");
    userEvent.type(year, "20211112");
    const month = screen.getByPlaceholderText("Enter month");
    userEvent.type(month, "1222222");
    const tare = screen.getByPlaceholderText("Enter tare");
    userEvent.type(tare, "12");
    const batteryCapacity = screen.getByPlaceholderText("Enter battery Capacity");
    userEvent.type(batteryCapacity, "1");
    const totalBatteryCapacity = screen.getByPlaceholderText("Enter total battery capacity");
    userEvent.type(totalBatteryCapacity, "1");
    const AutonomyWithMaximumLoad = screen.getByPlaceholderText("Enter Enter autonomy with maximum load");
    userEvent.type(AutonomyWithMaximumLoad, "1");
    const batteryChargingTime = screen.getByPlaceholderText("Enter battery charging time");
    userEvent.type(batteryChargingTime, "1");
    userEvent.click(submitebutton);
    expect(sucess).toBeInTheDocument();
    
});*/

test ('testar testar', () => {
    render(<App/>);
});

