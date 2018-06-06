import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '..//actions/index';

class AddNewPost extends Component {

    renderField(field) {

        const { meta: { touched, error } } = field;   //Object destructuring nested level
        const errorClass = `form-control ${touched && error ? 'is-invalid' : ''}`
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className={errorClass} type="text" {...field.input} />
                <div className="invalid-feedback">{touched ? error : ''}</div>
            </div>
        )
    }

    onSubmit(values) {
        this.props.createPost(values, () => {    //Action creator with callback function
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="container">
                <div className="row justify-content-sm-center">
                    <form className="w-50" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field label="Title" name="title" component={this.renderField} />
                        <Field label="Category" name="categories" component={this.renderField} />
                        <Field label="Post content" name="content" component={this.renderField} />
                        <button className="btn btn-primary" type="submit">Submit</button>
                        <Link to="/" className="btn btn-danger ">Cancel</Link>
                    </form>
                </div>
            </div>
        )
    }
}

const validate = (values) => {
    //Values containser all the input values entered by user {title:'asdf', categories:'example category', content:'example content'}
    const errors = {};

    if (!values.title) {
        errors.title = "Please enter title";
    }

    if (!values.categories) {
        errors.categories = 'Please enter category';
    }

    if (!values.content) {
        errors.content = "Please enter content for post";
    }

    //If errros object is empty then redux form will submit the form elase it will show error
    return errors;

}
export default reduxForm({
    form: 'AddPostForm',
    validate: validate
})(connect(null, { createPost })(AddNewPost));