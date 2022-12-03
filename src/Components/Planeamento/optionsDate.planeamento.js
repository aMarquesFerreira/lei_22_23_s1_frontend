const ListWarehouseOptions = (props) => {
  return props.warehouse.length > 0 ? (
    props.warehouse.map((option, i) => {
      return (
        <option key={i} value={option.warehouseIdentifier.identifier}>
          {option.designation.warehouseDesignation}
        </option>
      );
    })
  ) : (
    <tr>
      <td colSpan={4}>No warehouses found</td>
    </tr>
  );
};

export default ListWarehouseOptions;
