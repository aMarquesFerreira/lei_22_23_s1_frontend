import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil,faTrash} from "@fortawesome/free-solid-svg-icons";

const ListDelivery = (props) => {
  return props.deliverys.length > 0 ? (
    props.deliverys.map((delivery, i) => {
      return (
        <tr key={i}>
          <td>{delivery.deliveryIdentifier.identifier}</td>
          <td>{delivery.deliveryDate}</td>
          <td>{delivery.deliveryWeight.deliveryWeight}</td>
          <td>{delivery.deliveryWarehouse}</td>
          <td>{delivery.timeLoadTruck.time}</td>
          <td>{delivery.timeUnloadTruck.time}</td>

          <td>
            <button
              onClick={() => props.handleUpdateDelivery(delivery.deliveryIdentifier.identifier)}
              className="update">
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button
              onClick={() => props.handleDeleteDelivery(delivery.deliveryIdentifier.identifier)}
              className="delete">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan={4}>No deliverys found</td>
    </tr>
  );
};

export default ListDelivery;
