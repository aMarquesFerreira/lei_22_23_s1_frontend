import react, { useState } from 'react';
import './style.css';

const ListTruck = (props) => {
  const [data, setData] = useState();
  return (
    <tr>
      {data?.map((truck) => {
        return (
          <div key={truck.idTruck}>
            <td> {truck.props.enroll}</td>
            <td>{truck.props.year}</td>
            <td>{truck.props.tare}</td>
            <td>{truck.props.batteryCapacity}</td>
            <td>
              <a  class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
              <a  class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
            </td>
          </div>
        )
      }
      )}
    </tr>
  )
}

export default ListTruck;