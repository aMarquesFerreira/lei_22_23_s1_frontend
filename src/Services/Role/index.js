import axios from 'axios';
import { API_BASE_URL } from '../../Config/config';

export async function roleGetAll(signal) {
  try {
    const response = await axios.get(`${API_BASE_URL}/roles`, { signal });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function roleStore(role, signal) {
  try {
    const response = await axios.get(`${API_BASE_URL}/roles`, role, { signal });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function roleUpdate(id,role, signal) {
  try {
    const response = await axios.get(`${API_BASE_URL}/roles/${id}`,role,{ signal });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function roleDelete(id, signal) {
  try {
    const response = await axios.get(`${API_BASE_URL}/roles/${id}`, { signal });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}



