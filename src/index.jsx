// This is the entry file

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        {/* Replace the sentence below with your own components of react */}
        hey, ho, let's go!!!
      </div>  
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
