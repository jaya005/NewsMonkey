import React, { Component } from 'react'
import gif from './Full snake.gif'
export default class LoadingGif extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={gif} alt="loadinggg....." />
      </div>
    )
  }
}
