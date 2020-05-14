import React, { Component } from 'react';
import CloseButton from '../../svgs/components/x';
import LoveButton from '../../svgs/components/love_empty';
import ExpandArrow from '../../../assets/images/svg-font-icons/expand-arrow.svg';

const iconsStyle = {
  boxSizing: 'content-box',
  zIndex: 10,
  padding: '10px 20px',
  background: 'rgba(255,255,255,0.8)',
  borderRadius: 4,
  width: 25,
  height: 25,
  fill: 'black',
  cursor: 'pointer'
}
export default class FullscreenNavbr extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.getCloseButton = this.getCloseButton.bind(this);
    this.closeFullscreen = this.closeFullscreen.bind(this);
  }

  getCloseButton() {
    return <CloseButton style={iconsStyle} onClick={this.closeFullscreen} />
  }
  getExpandButton() {
    const style = {
      boxSizing: 'content-box',
      zIndex: 10,
      padding:'10px 20px',
      marginRight: 40,
      background: 'rgba(255,255,255,0.8)',
      borderRadius: 4,
      width: 25,
      height: 25,
      cursor: 'pointer'
    }
    return <img style={style} src={ExpandArrow} alt='expand' />
  }

  getLoveButton() {
    return <LoveButton style={iconsStyle} />
  }

  closeFullscreen() {
    this.props.eventsListener('CLOSE_FULLSCREEN', this.props.styles)
  }
  render() {
    const style = {
      marginTop: 30,
      width: ' 100%',
      height: '60px',
      position: 'absolute',
      top: '0px',
      left: '0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px',
      boxSizing: 'border-box',

    }
    return (
      <div
        className='fullscreen-navbar-container'
        style={style}
      >
        <div>
          {this.getExpandButton()}
          {this.getLoveButton()}
        </div>
        {this.getCloseButton()}
      </div>
    )
  }
}
