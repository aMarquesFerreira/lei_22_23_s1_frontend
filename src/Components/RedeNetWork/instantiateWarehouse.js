import { Warehouse } from './warehouse';

export const InstantiateWarehouse = () => {
  const warehouseStore = create((set) => ({
    warehouseIndex: [],
    addWarehouse: (x, y, z) =>
      set((state) => ({ warehouseIndex: [state.warehouseIndex, [x, y, z]] }))
  }));
  const warehouse = warehouseStore((state) => state.warehouse);
  //return warehouse.map((coords, index) => <Warehouse key={index} position={coords} />)
};
