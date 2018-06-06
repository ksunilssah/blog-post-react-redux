import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import '../styles/style.scss';

import rootReducer from './reducers/index';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './containers/post_list';
import AddNewPost from './containers/add_post';
import PostDetail from './containers/post_details';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={PostList} />
                <Route exact path="/posts/new" component={AddNewPost} />
                <Route exact path="/details/:id" component={PostDetail} />
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));