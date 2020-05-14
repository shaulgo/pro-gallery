
import React from 'react';
import ProGallery from '../proGallery/proGallery';
import LAYOUTS from '../../../common/constants/layout';
import GALLERY_CONSTS from '../../../common/constants';
import FullscreenNavbr from './fullscreenNavbr';
import SideBar from './sideBar';

export const fixedStyles = {
  galleryLayout: LAYOUTS.SLIDESHOW,
  enableInfiniteScroll: true,
  cubeRatio: '100%/100%',
  cubeImages: true,
  cubeType: 'crop',
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
  slideshowInfoSize: 200,
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
    this.state = {
      currentItemInfo: {
        title: '',
        description: ''
      },
    };
    this.getGallerySize = this.getGallerySize.bind(this);
    this.galleryEventListener = this.galleryEventListener.bind(this);
    this.getSideBar = this.getSideBar.bind(this);
  }
  
  galleryEventListener(eventName,data){
    console.log('gallery change',eventName,data);
    switch (eventName) {
      case GALLERY_CONSTS.events.CURRENT_ITEM_CHANGED:
          this.setState({
            currentItemInfo: {
              title: data.metaData.title || '',
              description: data.metaData.description || ''
            }
          })
        break;
    
      default:
        break;
    }
  }
  getGalleryComponent() {
    return (<ProGallery
      {...this.props}
      eventsListener={this.galleryEventListener}
      container={this.getGallerySize()}
      styles={
        createStyles(this.props.styles)
      }
    />)
  }

  getGallerySize() {
    // const isSideInfo = this.props.infoPosition === 'SIDE';
    const isSideInfo = true;
    const { width, height } = this.props.container;
    const container = {
      width: isSideInfo ? width * 0.7 : width,
      height: isSideInfo ? height * 0.8 : height,
    }
    return container;
  }

  getNavbar(){
    return <FullscreenNavbr {...this.props}/>
  }
  getSideBar(){
    return <SideBar currentItemInfo={this.state.currentItemInfo}/>
  }

  /////////////// REACT ///////////////////

  render() {
    const containerStyle = {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'white',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: '1000',
      paddingTop: '80px', // navbar size
      display: 'flex',
    }

    return (
      <div
        className="pro-fullscreen-container"
        style={containerStyle}
      >
        {this.getNavbar()}
        {this.getGalleryComponent()}
        {this.getSideBar()}
      </div>
    );
  }
}
