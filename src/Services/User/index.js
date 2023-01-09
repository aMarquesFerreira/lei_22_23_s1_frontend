import axios from 'axios';
import { API_BASE_URL } from '../../Config/config'
import { useRapier } from '@react-three/rapier';
import { Controller } from 'react-hook-form';


export async function userGetAll() {
    try {
        const response = await axios.get(`${API_BASE_URL}/auth/users`, { signal: Controller.signal })
        return response.data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function getMe() {
    try {
        const response = await axios.get(`${API_BASE_URL}/auth/me`,{signal: Controller.signal})
        return response.status(200).json();
    } catch (err) {
        throw new Error(err);
    }
}

export async function userDelete(id) {
    try {
        if(!id) throw new Error('You must provide a unique  id');
        const response = await axios.get(`${API_BASE_URL}/user/${id}`, { signal: Controller.signal })
        return response.data;
    } catch (err) {
        throw new Error(err);
    }
}



export async function SignIn(user) {
    try {
        if(!user) throw  new Error ("You must be logged in to sign in with this account  before  you can sign in again.");
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, user, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: false,
        });
        return response;
    } catch (err) {
        throw new Error(err.message);
    }
}

export async function SignUp(user) {
    try {
        if (!user) throw new Error("You must be logged in to sign up with this account  before  you can sign up again.");
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, user, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: false,
        });
        if (response.body.error || response.statusCode >= 400) {
            throw response;
        }
        return response;
    } catch (err) {
        console.error(err.message + ' is not signed up');
    }
}

export async function AuthenticateGoogle(token) {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/google`, { token: token },{ signal: Controller.signal, withCredentials: false })
        return response.data;
    } catch (err) {
        throw new Error(err);
    }
}
