import axios from 'axios';
import { API_BASE_URL } from '../../Config/config';

export async function travelGetAll(size, offset, signal) {
  try {
    const response = await axios.get(`${API_BASE_URL}/travel/ways/size=${size}&offset=${offset}`, { signal });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function travelDelete(id) {
  try {
     if(!id) throw new Error('You must provide a unique id for travel');
    return await axios.get(`${API_BASE_URL}/travel/${id}/way`);
  } catch (err) {
    throw new Error(err);
  }
}

export async function travelGetById(id) {
  try {
    if(!id) throw new Error('You must provide a unique id for travel');
    const response = await axios.get(`${API_BASE_URL}/travel/${id}/way`);
    if (!response.ok) {
      throw new Error('Failed to axios get.');
    }
      return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function travelSave(travel) {
  try {
    if (!travel) throw new Error('no vehicle found');
    const response = await axios.post(`${API_BASE_URL}/travel/way`, travel, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.status(201);
  } catch (err) {
    throw new Error(err);
  }
}

export async function travelUpdate(id, travel, options) {
  try {
    if (!id) {
      throw new Error('Invalid input data provided.');
    }
    const response = await axios.put(`${API_BASE_URL}/travel/${id}/way`, travel, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.status(200).json();
  } catch (err) {
    throw new Error(err);
  }
}
