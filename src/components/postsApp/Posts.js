import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

import CatImg from '../../img/kot.png';

class Posts extends Component {

  state = {
    posts: []
  }
  
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(data=>data.json())
//   .then(json => console.log(json));

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      this.setState({
        posts: res.data.slice(0,10)
      });
      // console.log(res);
    });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? 
    (
      posts.map(item=>{
        return (
          <div className="post card" key={item.id}>
          <img src={CatImg} alt="Kitty"/>
              <div className="card-content">
                <Link to={`/posts/${item.id}`}>
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

export default Posts;