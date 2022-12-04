import axios from 'axios';
import {DOTNET_BASE_URL} from '../../Config/config'

export async function deliveryGetAll() {
    try {
        const response = await axios.get(`${DOTNET_BASE_URL}/deliverys`);
        return response.data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function deliveryDelete(identifier) {
    try {
        return await axios.delete(`${DOTNET_BASE_URL}/deliverys/${identifier}`);
    } catch (err) {
        throw new Error(err);
    }
}

export async function deliveryGetById(identifier) {
    try {
        const response = await axios.get(`${DOTNET_BASE_URL}/deliverys/${identifier}`);
        console.log(" response para ok " + response.ok);
        /*if (!response.ok) {
            throw new Error('Failed to axios get.');
        }*/
        console.log("antes do retrun ");
        return response;
    } catch (err) {
        console.log("Erro");
        throw new Error(err);
    }
}

export async function deliverySave(delivery, options) {
    try {
        const response = await axios.post(`${DOTNET_BASE_URL}/deliverys`, delivery, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        //return response.status(201).json();
        return response;
    } catch (err) {
        throw new Error(err);
    }
}

export async function deliveryUpdate(identifier, delivery , options) {
    try {
        if (!identifier) {
            throw new Error('Invalid input data provided.');
        }
        console.log(delivery);
        const response = await axios.put(`${DOTNET_BASE_URL}/deliverys/${identifier}`, delivery, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (err) {
        throw new Error(err);
    }
}
