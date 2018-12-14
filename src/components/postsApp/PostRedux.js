import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {

  delPost = () =>{
    this.props.deletePost(this.props.post.id);
    this.props.history.push('/posts-redux');
    // console.log("hello");
  }

  render() {
    // console.log(this.props);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div>Loading...</div>
    );

    return (
      <div className="container">
        <h4>Post #{this.props.post.id}</h4>
        {post}
        <button onClick={this.delPost}>Delete Post</button>
      </div>
    )
  }
}

const mapStateToStates = (state, ownProps) =>{ //return states from redux(send to this component props) and local props 
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(p=>p.id===id)
  };
};

const mapDispatchToProps = (dispatch) =>{ //mutate states in redux
  //emulate store.dispatch({type: 'DELETE_POST', id: id})
  return {
    deletePost: (id) =>dispatch({type: 'DELETE_POST', id: id})
  };
};

export default connect(mapStateToStates,mapDispatchToProps)(Post);

