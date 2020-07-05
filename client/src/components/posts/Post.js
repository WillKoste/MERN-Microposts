import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../../actions/post';
import PropTypes from 'prop-types'

const Post = ({getPosts, post: {posts, loading, error}}) => {
  useEffect(() => {
    getPosts();
  }, []);
  
  return (
    <Fragment>
      {posts.posts.map(post => (
        <div className="post">
          <h3>{post.title}</h3>
          <p>{post.message}</p>
        </div>
      ))}
    </Fragment>
  )
}

Post.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, {getPosts})(Post);