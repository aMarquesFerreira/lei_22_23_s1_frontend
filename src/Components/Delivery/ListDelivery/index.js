import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil,faTrash} from "@fortawesome/free-solid-svg-icons";

const ListDelivery = (props) => {
    return props.deliveries.length > 0 ? (
        props.deliveries.map((delivery, i) => {
            return (
                <tr key={i}>
                    <td>{delivery.deliveryIdentifier.identifier}</td>
                    <td>{delivery.deliveryDate}</td>
                    <td>{delivery.deliveryWeight.DeliveryWeight}</td>
                    <td>{delivery.deliveryWarehouse}</td>
                    <td>{delivery.timeLoadTruck.time}</td>
                    <td>{delivery.timeUnloadTruck.time}</td>
                    <td>
                        <button onClick={() => props.handleUpdateDelivery(delivery.idDelivery)} className="delete">
                            <FontAwesomeIcon icon={faPencil}/>
                        </button>
                        <button onClick={() => props.handleDeleteDelivery(delivery.idDelivery)} className="update">
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </td>
                </tr>
            );
        })
    ) : (
        <tr>
            <td colSpan={4}>No deliveries found</td>
        </tr>
    );
};

export default ListDelivery;
