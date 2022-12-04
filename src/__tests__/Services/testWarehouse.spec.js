//import axios from 'axios';
//import { warehouseSave } from './../../Services/Warehouse';
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
const { warehouseSave, API} = require('./../../Services/Warehouse');

jest.mock('axios');

/*describe('add warehouse', () => {
  it('add warehouseeee', async () => {
    const res = { data: iw };

      const headers = {
        'Content-Type': 'application/json'
    };
    axios.post.mockResolvedValueOnce(res);
    const response = await warehouseSave(iw, headers);
    console.log("um"+" "+response.data.WarehouseIdentifier.identifier);

    console.log("dois"+" "+res.data.WarehouseIdentifier.identifier);
    //await expect(response.data.WarehouseIdentifier.identifier).resolves.toEqual(res.data.WarehouseIdentifier.identifier);
    expect(response.data.WarehouseIdentifier.identifier).toBe(res.data.WarehouseIdentifier.identifier);
  });
});*/

describe('add warehouse', () => {
    it('add warehouseeee', async () => {
      const res = { data: iw };
  
        const headers = {
          'Content-Type': 'application/json'
      };
      axios.post.mockResolvedValueOnce(res);
      const response = await warehouseSave(iw, headers);
      console.log("um"+" "+response.data.WarehouseIdentifier.identifier);
  
      console.log("dois"+" "+res.status(201).json());
      //await expect(response.data.WarehouseIdentifier.identifier).resolves.toEqual(res.data.WarehouseIdentifier.identifier);
      expect(response.data.WarehouseIdentifier.identifier).toBe(res.data.WarehouseIdentifier.identifier);
    });
  });