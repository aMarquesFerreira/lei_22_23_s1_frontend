import axios from 'axios';
import { API_BASE_URL } from '../../Config/config'

export async function savePlaneamento(data) {
    try {
        const response = await axios.post(`${API_BASE_URL}/`,{
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.status(200).json();
    }catch(err){
        throw new Error(err);
    }
}