import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
 
import CatImg from '../../img/kot.png';

class Posts extends Component {

  render() {
    // console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? 
    (
      posts.map(item=>{
        return (
          <div className="post card" key={item.id}>
          <img src={CatImg} alt="Kitty"/>
              <div className="card-content">
                <Link to={`/posts-redux/${item.id}`}>
                  <span className="card-title">{item.title}</span>
                </Link>
                <p>{item.body}</p>
              </div>
          </div>
        );
      })
    ) : 
    (
    <div>Loading...</div>
    );
    
    return (
      <div className="posts">
        {postList}
      </div>
    );
  }
}

const mapStateToStates = (state) =>{
  return {
    posts: state.posts
  };
};

export default connect(mapStateToStates)(Posts);