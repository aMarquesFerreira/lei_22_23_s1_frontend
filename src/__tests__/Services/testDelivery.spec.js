

const initDelivery = {
    DeliveryIdentifier: {
      Identifier: '456'
    },
    DeliveryDate: '2022-10-05',
    DeliveryWeight: {
      DeliveryWeight: '1000'
    },
    DeliveryWarehouse: '111',
    TimeLoadTruck: {
      Time: '60'
    },
    TimeUnloadTruck: {
      Time: '60'
    }
  };

  const initDelivery2 = {
    DeliveryIdentifier: {
      Identifier: '457'
    },
    DeliveryDate: '2022-10-05',
    DeliveryWeight: {
      DeliveryWeight: '1000'
    },
    DeliveryWarehouse: '111',
    TimeLoadTruck: {
      Time: '60'
    },
    TimeUnloadTruck: {
      Time: '60'
    }
  };
  const axios = require('axios');
  const { deliverySave, deliveryGetById, deliveryUpdate} = require('./../../Services/Delivery');
  jest.mock('axios');
 
  describe('add delivery', () => {
    it('add deliveryy', async () => {
      const res = { data: initDelivery };
 
        const headers = {
          'Content-Type': 'application/json'
      };
      axios.post.mockResolvedValueOnce(res);
      const response = await deliverySave(initDelivery, headers);
      //await expect(response.data.WarehouseIdentifier.identifier).resolves.toEqual(res.data.WarehouseIdentifier.identifier);
      console.log(response.data.DeliveryIdentifier.Identifier);
      expect(response.data.DeliveryIdentifier.Identifier).toBe(res.data.DeliveryIdentifier.Identifier);
    });
  });
 
  describe('delivery getbyid', () => {
    it('deliveryy getbyid', async () => {
      const res = { data: initDelivery};
        
      axios.get.mockResolvedValueOnce(res);
      const headers = {
        'Content-Type': 'application/json'
      };
      const response = await deliveryGetById(initDelivery.DeliveryIdentifier.Identifier, headers);
      //await expect(response.data.WarehouseIdentifier.identifier).resolves.toEqual(res.data.WarehouseIdentifier.identifier);
      expect(response.data.DeliveryIdentifier.Identifier).toBe(res.data.DeliveryIdentifier.Identifier);
    });
  });


describe('update delivery', () => {
    it('update deliveryy', async () => {
      const res = { data: initDelivery };
 
        const headers = {
          'Content-Type': 'application/json'
      };
      axios.put.mockResolvedValueOnce(res);
      const response = await deliveryUpdate(initDelivery.DeliveryIdentifier.Identifier,initDelivery, headers);
      
      
      expect(response.data.DeliveryIdentifier.Identifier).toBe(res.data.DeliveryIdentifier.Identifier);
    });
  });

  /*describe('delivery getall', () => {
    it('deliveryy getall', async () =>{
      const res = { data: initDelivery};
      console.log("log res"+ res.data.DeliveryIdentifier.Identifier);
      axios.get.mockResolvedValueOnce(res);
      const response = await deliveryGetAll();
      console.log("log response"+response.WarehouseIdentifier.identifier);
      expect(response).toBe(res);
    })
  });*/





