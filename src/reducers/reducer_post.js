import { GET_POST_LIST, CREATE_POST, GET_SINGLE_POST, DELETE_POST } from '../constants';
import _ from 'lodash';

export default (state = {}, action) => {

    switch (action.type) {
        case GET_POST_LIST:
            return _.mapKeys(action.payload.data, 'id');

        case DELETE_POST:
            return _.omit(state, action.payload);

        case GET_SINGLE_POST:
            //const newPost = action.payload.data;

            /*const newState = { ...state };
            newState[newPost.id] = newPost;
            return newState;*/
            return Object.assign({}, state.posts, { [action.payload.data.id]: action.payload.data });
          //  return { ...state, [action.payload.data.id]: action.payload.data };


        default:
            return state;
    }
}