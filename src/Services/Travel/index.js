import axios from 'axios';
import { API_BASE_URL } from '../../Config/config';

export async function travelGetAll() {
  try {
    const response = await axios.get(`${API_BASE_URL}/travel/ways`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function travelDelete(id) {
  try {
    return await axios.get(`${API_BASE_URL}/travel/${id}/way`);
  } catch (err) {
    throw new Error(err);
  }
}

export async function travelGetById(id) {
  try {
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
    const response = await axios.post(`${API_BASE_URL}/travel/way`, travel, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.status(201).json();
  } catch (err) {
    throw new Error(err);
  }
}

export async function travelUpdate(id, travel) {
  try {
    if (!id) {
      throw new Error('Invalid input data provided.');
    }
    const response = await axios.post(`${API_BASE_URL}/travel/${id}/way`, id, travel, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.status(200).json();
  } catch (err) {
    throw new Error(err);
  }
}
