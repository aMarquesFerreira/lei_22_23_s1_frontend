import axios from 'axios';
import { DOTNET_BASE_URL, DOTNET_BASE_URL2 } from '../../Config/config'
import { Controller } from 'react-hook-form';


export async function warehouseGetAll(offset, size, signal) {
    try {
        const response = await axios.get(`${DOTNET_BASE_URL}/warehouses/list?offset=${offset}&size=${size}`, { signal });
        return response.data;
    } catch (err) {
        throw new Error(err);
    }
}


export async function warehouseDelete(identifier) {
    try {
        return await axios.get(`${DOTNET_BASE_URL}/warehouses/${identifier}`)
    } catch (err) {
        throw new Error(err);
    }
}

export async function warehouseGetById(identifier) {
    try {
        if (!identifier) { throw new Error('No such identifier provided for warehouse ') }
        const response = await axios.get(`${DOTNET_BASE_URL}/warehouses/${identifier}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
        return response;
    } catch (err) {
        throw new Error(err);
    }
}

export async function warehouseSave(warehouse) {
    try {
        console.log('Saving', warehouse);
        const response = await axios.post(`${DOTNET_BASE_URL}/warehouses`, warehouse, {

            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (err) {
        throw new Error(err);
    }
}

export async function warehouseUpdate(identifier, warehouse) {
    try {
        if (!identifier) {
            throw new Error('Invalid input data provided.');
        }
        const response = await axios.put(`${DOTNET_BASE_URL}/warehouses/${identifier}`, warehouse, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (err) {
        throw new Error(err);
    }
}

export async function warehouseUpdateIsActive(identifier, warehouse) {
    try {
        if (!identifier) {
            throw new Error('Invalid input data provided.');
        }
        const response = await axios.patch(`${DOTNET_BASE_URL}/warehouses/inactive/${identifier}`, warehouse, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (err) {
        throw new Error(err);
    }
}

export async function warehousesActive(signal) {
    try {
        const response = await axios.get(`${DOTNET_BASE_URL}/warehouses/ative`, {
            headers: {
                'Content-Type': 'application/json',
            },
            signal,
        });
        return response;
    } catch (err) {
        throw new Error(err);
    }
}

export async function warehousesInactive() {
    try {
        const response = await axios.get(`${DOTNET_BASE_URL}/warehouses/inactive`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (err) {
        throw new Error(err);
    }
}
