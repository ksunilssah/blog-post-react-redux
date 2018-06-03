import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { GetPostList } from '../actions/index';


class PostList extends Component {

    renderPost() {
        return (
            _.map(this.props.posts, post => {
                if (post.title !== null) {
                    return (
                        <li className="list-group-item" key={post.id}>
                            <a href={`/post/:${post.id}`}>{post.title}</a>
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

            <div className="row justify-content-sm-center">
                <div className="w-50">
                    <h4>Posts</h4>
                    <ul className="list-group">
                        {this.renderPost()}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}
export default connect(mapStateToProps, { GetPostList })(PostList);