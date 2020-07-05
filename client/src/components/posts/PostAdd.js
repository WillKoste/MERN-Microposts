import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {addPost} from '../../actions/post';

const PostSearch = ({addPost}) => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value="title" placeholder="Title of your post..." />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input type="text" name="message" value="message" placeholder="Your message..." />
        </div>
      </form>
    </div>
  )
}

PostSearch.propTypes = {
  addPost: PropTypes.func.isRequired
}

export default connect(null, {})(PostSearch);