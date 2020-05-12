
import React from 'react';
import ProGallery from '../proGallery/proGallery';
import LAYOUTS from '../../../common/constants/layout';
import GALLERY_CONSTS from '../../../common/constants';
import CloseButton from '../../svgs/components/x';

export const fixedStyles = {
  galleryLayout: LAYOUTS.SLIDESHOW,
  enableInfiniteScroll: true,
  cubeRatio: '100%/100%',
  cubeImages: true,
  cubeType: 'fit',
  oneRow: true,
  hoveringBehaviour: GALLERY_CONSTS.infoBehaviourOnHover.NEVER_SHOW,
  scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL,
  galleryMargin: 0,
  isVertical: false,
  groupSize: 1,
  groupTypes: '1',
  itemBorderWidth: 0,
  itemBorderRadius: 0,
  itemBorderColor: undefined,
  smartCrop: false,
  gallerySize: 550,
  galleryType: 'Strips',
  fixedColumns: 1,
  hasThumbnails: false,
  enableScroll: true,
  scrollSnap: true,
  isGrid: false,
  isColumns: false,
  isMasonry: false,
  isSlider: false,
  isSlideshow: true,
  cropOnlyFill: false,
  floatingImages: 0,
  imageMargin: 0,
  slideshowInfoSize: 0,
  arrowsPosition: GALLERY_CONSTS.arrowsPosition.OUTSIDE_GALLERY,
  showArrows: true,
}

export const createStyles = styles => {
  return {
    ...styles,
    ...fixedStyles,
  }
}

export default class Fullscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.closeFullscreen = this.closeFullscreen.bind(this)
  }
  closeFullscreen() {
    this.props.eventsListener('CLOSE_FULLSCREEN', createStyles(this.props.styles))
  }
  getCloseButton() {
    const style = {
      boxSizing: 'content-box',
      zIndex: 10,
      padding: 10,
      position: 'fixed',
      right: 20,
      top: 20,
      background: 'rgba(255,255,255,0.8)',
      borderRadius: 4,
      width: 25,
      height: 25,
      fill: 'black',
      cursor: 'pointer'
    }
    return <CloseButton style={style} onClick={this.closeFullscreen} />
  }
  getGalleryComponent() {
    return (<ProGallery
      {...this.props}
      styles={
        createStyles(this.props.styles)
      }
    />)
  }
  render() {
    const containerStyle = {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'white',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: '1000'
    }

    return (
      <div
        className="pro-fullscreen-container"
        style={containerStyle}
      >
        {this.getGalleryComponent()}
        {this.getCloseButton()}
      </div>
    );
  }
}
