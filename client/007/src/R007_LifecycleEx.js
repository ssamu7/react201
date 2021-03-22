import React, { Component } from 'react';

class R007_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps Call :'+props.prop_value2);
    return {tmp_state2:props.prop_value2};
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log('1. constructor Call');
  }

  componentDidMount() {
    console.log('4. componentDidMount Call');
    console.log('5. tmp_state : '+this.state.tmp_state2);
  }

  render() {
    console.log('3. render Call');
    return (
      <h2>[ THIS IS COMPONENTDIDMOUNT FUCNTION ]</h2>
    )
  }
}

export default R007_LifecycleEx;