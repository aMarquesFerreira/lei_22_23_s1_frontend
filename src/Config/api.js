import { API_BASE_URL, API_TOKEN_URL } from './config'
import axios from 'axios'
import queryString from 'query-string'

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams);
    return axios.get(`${API_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN_URL}`,
            origin: 'localhost',
            withCredentials: true,
        }
    });
}