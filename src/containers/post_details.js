import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSinglePost, deletePost } from '../actions/index';
class PostDetail extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getSinglePost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div className="row justify-content-sm-center">Loading ..</div>;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="w-100">
                        <Link className="back" to="/" > &lt; Back To Index</Link>
                        <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger float-right">Delete Post</button>
                        <h3>{post.title}</h3>
                        <h6>{post.categories}</h6>
                        <p>{post.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

/*First param is always be an state and second param  is props */
const mapStateToProp = ({ posts }, ownProps) => {
    return {
        post: posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProp, { getSinglePost, deletePost })(PostDetail);
