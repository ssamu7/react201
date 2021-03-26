import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class R089_reactRouter2 extends Component {
  render() {
    return (
      <>
        <h1>path='/2'</h1>
        <h3>R089_reactRouter2</h3>
        <Link to={'/'}>reactRouter1</Link>
      </>
    )
  }
}

export default R089_reactRouter2;