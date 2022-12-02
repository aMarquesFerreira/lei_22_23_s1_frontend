import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil,faTrash} from "@fortawesome/free-solid-svg-icons";

const ListWarehouse = (props) => {
    return props.warehouses.length > 0 ? (
        props.warehouses.map((warehouse, i) => {
            return (
              <tr key={i}>
                <td>{warehouse.warehouseIdentifier.identifier}</td>
                <td>{warehouse.designation.warehouseDesignation}</td>
                <td>{warehouse.address.street}</td>
                <td>
                  {warehouse.coordinates.latitude},{warehouse.coordinates.longitude}
                </td>
                <td>{warehouse.altitude.whAltitude}</td>
                <td>
                  <button
                    onClick={() =>
                      props.handleUpdatewarehouse(warehouse.warehouseIdentifier.identifier)
                    }
                    className="delete">
                    <FontAwesomeIcon icon={faPencil} />
                  </button>
                  <button
                    onClick={() =>
                      props.handleDeletewarehouse(warehouse.warehouseIdentifier.identifier)
                    }
                    className="update">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            );
        })
    ) : (
        <tr>
            <td colSpan={4}>No warehouses found</td>
        </tr>
    );
};

export default ListWarehouse;
