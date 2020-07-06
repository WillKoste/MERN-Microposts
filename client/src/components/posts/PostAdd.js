import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {addPost} from '../../actions/post';

const PostAdd = ({addPost, post: {posts, loading, error}}) => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Title of your post..." />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input type="text" name="message" placeholder="Your message..." />
        </div>
      </form>
    </div>
  )
}

PostAdd.propTypes = {
  addPost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, {addPost})(PostAdd);