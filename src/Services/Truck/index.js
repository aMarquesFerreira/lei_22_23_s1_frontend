import axios from 'axios';
import { API_BASE_URL } from '../../Config/config'

export async function truckGetAll(size, offset, signal) {
    try {
        const response = await axios.get(`${API_BASE_URL}/vehicles/trucks/size=${size}&offset=${offset}`, { signal });
        return response.data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function truckGetAllInhibited(signal) {
    try {
        const response = await axios.get(`${API_BASE_URL}/vehicles/trucks/inhibited`, { signal });
        return response;
    } catch (err) {
        throw new Error(err);
    }
}

export async function truckDelete(id) {
    try {
        if(!id) throw new Error('Missing  id');
        return await axios.delete(`${API_BASE_URL}/vehicles/${id}/truck`)
    } catch (err) {
        throw new Error(err);
    }
}

export async function truckGetById(id) {
    try {
        if (!id) throw new Error('Missing  id');
        const response = await axios.get(`${API_BASE_URL}/vehicles/${id}/truck`);
        if (response.ok === false) {
            throw new Error('Failed to axios get.');
        }
        return response.data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function truckSave(truck) {
    try {
        if(!truck) throw new Error('Vehicle not found');
        const response = await axios.post(`${API_BASE_URL}/vehicles/truck`, truck, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (err) {
        throw new Error(err);
    }
}

export async function truckUpdate(id, truck, options) {
    try {
        if (!id) throw new Error('Invalid input data provided.');
        const response = await axios.put(`${API_BASE_URL}/vehicles/${id}/truck/`, truck, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (err) {
        throw new Error(err);
    }
}
