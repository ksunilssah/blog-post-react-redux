import { GET_POST_LIST, POST_URL, API_KEY, CREATE_POST, GET_SINGLE_POST, DELETE_POST } from '../constants';
import axios from 'axios';

export function GetPostList() {
    const url = `${POST_URL}posts?key${API_KEY}`;
    const request = axios.get(url);

    return {
        type: GET_POST_LIST,
        payload: request
    }
}

export function createPost(values, callback) {  //Action with callback function
    const url = `${POST_URL}posts?key${API_KEY}`;
    const request = axios.post(url, values)
        .then(() => { callback() });
console.log(request);
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function getSinglePost(id) {
    const url = `${POST_URL}posts/${id}?key${API_KEY}`;
    const request = axios.get(url);

    return {
        type: GET_SINGLE_POST,
        payload: request
    }

}

export function deletePost(id, callback) {
    const url = `${POST_URL}posts/${id}?key${API_KEY}`;
    const request = axios.delete(url)
        .then(() => { callback() });

    return {
        type: DELETE_POST,
        payload: id
    }
}