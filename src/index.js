import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import '../styles/style.scss';

import rootReducer from './reducers/index';
import PostList from './containers/post_list';
import AddNewPost from './containers/add_post';
import Header from './components/header';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Router>
            <div className="container">
                <Route exact path="/posts/new" component={AddNewPost} />
                <Route exact path="/" component={PostList} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));