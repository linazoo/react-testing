import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state= { comment: '' };

    console.log('heyyy this is first');
  }

  componentWillMount() {
    console.log('this is second');
  }

  componentDidMount() {
    console.log('this is last, the compoent has rendered')
  }
  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit= { this.handleSubmit.bind(this) } className="comment-box">
        <textarea 
        value={ this.state.comment }
        onChange={ this.handleChange.bind(this) } />
        <button action='submit'>Submit Comment</button>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);