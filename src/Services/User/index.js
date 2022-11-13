import axios from 'axios';
import { API_BASE_URL } from '../../Config/config'

export async function getMe() {
    try {
        const response = await axios.get(`${API_BASE_URL}/auth/me`)
        return response.status(200).json();
    } catch (err) {
        throw new Error(err);
    }
}

export async function userDelete(id) {
    try {
        const response = await axios.get(`${API_BASE_URL}/${id}/user`)
        return response.status(200).json();
    } catch (err) {
        throw new Error(err);
    }
}



export async function SignIn(user) {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.status(200).json();
    } catch (err) {
        throw new Error(err);
    }
}

export async function SignUp(user) {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, {
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.status(200).json();
    } catch (err) {
        throw new Error(err);
    }
}

