import React, { Component } from 'react';
import CloseButton from '../../svgs/components/x';

export default class FullscreenNavbr extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.getCloseButton = this.getCloseButton.bind(this);
    this.closeFullscreen = this.closeFullscreen.bind(this);
  }

  getCloseButton() {
    const style = {
      boxSizing: 'content-box',
      zIndex: 10,
      padding: 10,
      position: 'absolute',
      right: 20,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.8)',
      borderRadius: 4,
      width: 25,
      height: 25,
      fill: 'black',
      cursor: 'pointer'
    }
    return <CloseButton style={style} onClick={this.closeFullscreen} />
  }

  closeFullscreen() {
    this.props.eventsListener('CLOSE_FULLSCREEN', this.props.styles)
  }
  render() {
    const style = {
      width: '100%',
      height: '80px',
      position: 'absolute',
      top: 0,
      left: 0,
    }
    return (
      <div
        className='fullscreen-navbar-container'
        style={style}
      >
        {this.getCloseButton()}
      </div>
    )
  }
}
