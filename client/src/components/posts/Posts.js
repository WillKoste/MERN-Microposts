import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../../actions/post';
import PropTypes from 'prop-types'
import Spinner from '../filler/Spinner';
import Post from './Post';
import post from '../../reducers/post';

const Posts = ({getPosts, post: {posts, loading, error}}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  
  return (
    <div className="container">
      {loading ? <Spinner /> : (
        <Fragment>
          <h1>Latest Posts</h1>
          <hr/>
          <div className="posts-container">
            <Post key={post._id} post={post} />
          </div>
        </Fragment>
      )}
    </div>
  )
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, {getPosts})(Posts);