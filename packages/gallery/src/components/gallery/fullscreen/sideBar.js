import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    
    const containerStyle ={
      width: '30%',
      height: '100%',
    }
    const titleStyle = {
      fontSize: '24px',
    }
    const descriptionStyle= {
      fontSize: '18px',
    }
    return (
      <div style={containerStyle}>
         <h2 style={titleStyle}>{this.props.currentItemInfo.title}</h2>
         <p style={descriptionStyle} >{this.props.currentItemInfo.description}</p>
      </div>
    )
  }
}

export default SideBar
