// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
// not entirely sure why this is import React from 'react' and not import React, { Component }
// but clearly the distinction is important! 
// and the extends React.Component is distinct from import React, { Component }. Maybe has something to do with props?
  constructor(props) {
    super() 

    this.state = {
      secondsLeft: props.initialCount
      // initial state
      // this is the format you need
      // remember the key passes through the value to the other methods/functions/etc.
    }
  }

    render() {
        if (this.state.secondsLeft === 0) {
            return (<div>Boom!</div>)
            // if there are no more seconds left then boom
        } else {
            return(<div>{this.state.secondsLeft} seconds left before I go boom!</div>)
            // if there are seconds left, then boom tomorrow. always a boom tomorrow
        }
    }
}

export default Bomb
// don't forget to export!