import React, { Component } from 'react';
import { debounce } from "lodash";

class R094_reactDebounce extends Component {
  debounceFunc = debounce(() => {
    alert("Debounce API Call");
  }, 5000);
  
  render() {
    return (
      <>
        <h2>검색어 입력</h2> 
        <input type="text" onChange={this.debounceFunc} />
      </>
    )
  }
}

export default R094_reactDebounce;