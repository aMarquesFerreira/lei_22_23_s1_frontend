import axios from 'axios';
import { DOTNET_BASE_URL } from '../../Config/config'


export async function warehouseGetAll() {
    try {
        const response = await axios.get(`${DOTNET_BASE_URL}/warehouses`);

        return response.data;
        //return response.status(200).json();
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
        const response = await axios.get(`${DOTNET_BASE_URL}/warehouses/${identifier}`)
        if (!response.ok) {
            throw new Error('Failed to axios get.');
        }
        return response.data;
        //return response.status(200).json();
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
        return response.status(201).json();
    } catch (err) {
        throw new Error(err);
    }
}

export async function warehouseUpdate(identifier, warehouse) {
    try {
        if (!identifier) {
            throw new Error('Invalid input data provided.');
        }
        const response = await axios.post(`${DOTNET_BASE_URL}/warehouses/${identifier}`, warehouse, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
        //return response.status(200).json();
    } catch (err) {
        throw new Error(err);
    }
}
