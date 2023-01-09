import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListTruck = (props) => {
return props.trucks.length > 0 ? (
  props.trucks.map((truck, i) => {
    return (
      <tr key={i}>
        <td>{truck.month}</td>
        <td>{truck.enroll}</td>
        <td>{truck.year}</td>
        <td>{truck.tare}</td>
        <td>{truck.batteryCapacity}</td>
        <td>
          <button onClick={() => props.handleUpdatetruck(truck.idTruck)} className="delete">
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button onClick={() => props.handleDeletetruck(truck.idTruck)} className="update">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    );
  })
) : (
  <tr>
    <td colSpan={4}>No trucks found</td>
  </tr>
);
};

export default ListTruck;
