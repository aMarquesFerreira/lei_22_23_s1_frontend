import axios from 'axios';
import { API_BASE_URL } from '../../Config/config'

export async function truckGetAll() {
    try {
        const response = await axios.get(`${API_BASE_URL}/truck`)
        return response.status(200).json();
    } catch (err) {
        throw new Error(err);
    }
}

export async function truckDelete(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}/truck`)
        return response.status(200).json();
    } catch (err) {
        throw new Error(err);
    }
}

export async function truckGetById(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/truck/${id}`)
        if (!response.ok) {
            throw new Error('Failed to axios get.');
        }
        return response.status(200).json();
    } catch (err) {
        throw new Error(err);
    }
}

export async function truckSave(truck) {
    try {
        const response = await axios.post(`${API_BASE_URL}/truck`, {
            body: JSON.stringify(truck),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.status(200).json();
    } catch (err) {
        throw new Error(err);
    }
}

export async function truckUpdate(id, truck) {
    try {
        if (!id) {
            throw new Error('Invalid input data provided.');
        }
        const response = await axios.post(`${API_BASE_URL}/${id}/truck/`, {
            body: JSON.stringify(truck),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.status(200).json();
    } catch (err) {
        throw new Error(err);
    }
}
