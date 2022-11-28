import './style.css';

const ListTruck = (props) => {
  return (
    <tr>
      {props.trucks.length > 0 ? (
        props.trucks.map((truck) => {
          return (
            <tr key={truck.idTruck}>
              <td>{truck.enroll}</td>
              <td>{truck.month}</td>
              <td>{truck.year}</td>
              <td>{truck.tare}</td>
              <td>{truck.batteryCapacity}</td>
              <td>
                <button onClick={() => props.handleDeletetruck(idTruck)} className="delete" />
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan={4}>No trucks found</td>
        </tr>
      )}
    </tr>
  );
};

export default ListTruck;
