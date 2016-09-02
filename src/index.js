// This is the entry file

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      {/* Replace the div markup with your own components of react */}
      <div>hey, ho, let\'s go!!!</div>  
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
