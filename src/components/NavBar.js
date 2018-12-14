import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = ({deleteTempStorage}) => {
  return(
    <div className="row">
      <nav className="col s12 m12 l12 xl12">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right">
            <li><button onClick={deleteTempStorage}>Delete Temp Storage</button></li>
            {/* <li><a href="/">To Home refresh</a></li> */}
            <li><Link to="/">To Home</Link></li>{/*link prevent refresh of page*/}
            <li><Link to="/posts">To Posts(from remote)</Link></li>
            <li><Link to="/posts-redux">To Posts-Redux(from local)</Link></li>
            <li><NavLink to="/MenApp">To Men App</NavLink></li> {/*Add active link class*/}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
