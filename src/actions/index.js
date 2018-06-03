import { GET_POST_LIST, POST_URL, API_KEY } from '../constants';
import axios from 'axios';

export function GetPostList() {
    const url = `${POST_URL}posts?key${API_KEY}`;
    const request = axios.get(url);

    return {
        type: GET_POST_LIST,
        payload: request
    }
}