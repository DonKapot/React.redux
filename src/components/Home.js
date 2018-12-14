import React, {Component} from 'react';
import Rainbow from './Rainbow';


class Home extends Component {
  render() {
    return (
      <div className="row center">
        <h1>Welcome to home route!!!</h1>
      </div>
    );
  }
}
//Higer Order component it is wrapper-function for component
export default Rainbow(Home);