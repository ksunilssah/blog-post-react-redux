import { GET_POST_LIST } from '../constants';
import _ from 'lodash';

export default (state = {}, action) => {

    switch (action.type) {
        case GET_POST_LIST:
            return _.mapKeys(action.payload.data, 'id');

        default:
            return state;
    }
}