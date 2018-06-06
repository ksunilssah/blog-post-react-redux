import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import { GetPostList } from '../actions/index';


class PostList extends Component {

    renderPost() {
        return (
            _.map(this.props.posts, (post, index) => {
                if (post.title !== null) {
                    return (
                        <li className="list-group-item" key={index}>
                            <Link to={`/details/${post.id}`}>{post.title}</Link>
                        </li>
                    )
                }
            })
        )
    }
    componentDidMount() {
        this.props.GetPostList();
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="w-50">
                        <div className="text-xs-right">
                            <Link className="btn btn-primary" to="/posts/new">Add New Post</Link>
                        </div>
                        <h4>Posts</h4>
                        <ul className="list-group">
                            {this.renderPost()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}
export default connect(mapStateToProps, { GetPostList })(PostList);