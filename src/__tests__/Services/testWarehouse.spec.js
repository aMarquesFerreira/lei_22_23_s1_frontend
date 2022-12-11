import { DOTNET_BASE_URL} from '../../Config/config'



const iw = {
    WarehouseIdentifier: {
      identifier: '000'
    },
    Designation: {
      warehouseDesignation: 'warehouse1'
    },
    Address: {
      street: 'Rua de Grijó',
      doorNumber: '431',
      zipCode: '4150-384',
      city: 'Porto',
      country: 'Portugal'
    },
    Coordinates: {
      latitude: '41.1565',
      longitude: '8.6486'
    },
    Altitude: {
      whAltitude: '300'
    }
  };


const axios = require('axios');
const { warehouseSave,warehouseUpdate, warehouseGetById, API} = require('./../../Services/Warehouse');

jest.mock('axios');

describe('add warehouse', () => {
    it('add warehouseeee', async () => {
      const res = { data: iw };
  
        const headers = {
          'Content-Type': 'application/json'
      };
      axios.post.mockResolvedValueOnce(res);
      const response = await warehouseSave(iw, headers);
      console.log("um"+" "+response.data.WarehouseIdentifier.identifier);
  
      expect(response.data.WarehouseIdentifier.identifier).toBe(res.data.WarehouseIdentifier.identifier);
    });
  });


  describe('update warehouse', () => {
    it('update warehouseeee', async () => {
      const res = { data: iw };
  
        const headers = {
          'Content-Type': 'application/json'
      };
      axios.put.mockResolvedValueOnce(res);
      const response = await warehouseUpdate(iw.WarehouseIdentifier.identifier,iw, headers);
      
      
      expect(response.data.WarehouseIdentifier.identifier).toBe(res.data.WarehouseIdentifier.identifier);
    });
  });


  describe('warehouse getbyid', () => {
    it('warehouse getbyiddd', async () => {
      const res = { data: iw};
        
      axios.get.mockResolvedValueOnce(res);
      const headers = {
        'Content-Type': 'application/json'
      };
      const response = await warehouseGetById(iw.WarehouseIdentifier.identifier, headers);
      expect(response.data.WarehouseIdentifier.identifier).toBe(res.data.WarehouseIdentifier.identifier);
    });
  });