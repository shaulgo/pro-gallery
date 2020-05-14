
import React from 'react';
import ProGallery from '../proGallery/proGallery';
import LAYOUTS from '../../../common/constants/layout';
import GALLERY_CONSTS from '../../../common/constants';
import FullscreenNavbr from './fullscreenNavbr';
import SideBar from './sideBar';
import utils from '../../../common/utils';

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
  slideshowInfoSize: 100,
  allowTitle: false,
  allowDescription: false,
  arrowsPosition: GALLERY_CONSTS.arrowsPosition.OUTSIDE_GALLERY,
  showArrows: true,
  loveButton: !utils.isMobile(),
  allowSocial: !utils.isMobile(),
  allowDownload: !utils.isMobile(),
  arrowsColor: {value: 'rgba(0,0,0,1)'}
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
      currentIdx: -1,
      currentItemInfo: {
        title: '',
        description: ''
      },
    };
    this.getGallerySize = this.getGallerySize.bind(this);
    this.galleryEventListener = this.galleryEventListener.bind(this);
    this.getSideBar = this.getSideBar.bind(this);

    this.state.currentIdx = this.props.currentIdx
  }

  galleryEventListener(eventName, data) {
    console.log('gallery change', eventName, data);
    switch (eventName) {
      case GALLERY_CONSTS.events.CURRENT_ITEM_CHANGED:
        this.setState({
          currentIdx: data.idx,
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
    const containerStyle = {
      ...this.getGallerySize(),
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      padding: 20,
    }
    return (
      <div 
      style={containerStyle}
      >
        <ProGallery
          {...this.props}
          currentIdx={this.state.currentIdx}
          eventsListener={this.galleryEventListener}
          container={this.getGallerySize()}
          styles={
            createStyles(this.props.styles)
          }
        />
      </div>
    )
  }

  getGallerySize() {
    // const isSideInfo = this.props.infoPosition === 'SIDE';
    const isSideInfo = true;
    const { width, height } = this.props.container;
    const container = {
      width: isSideInfo ? width * 0.7 : width,
      height: isSideInfo ? height * 0.7 : height,
    }
    // const container = {
    //   width: 400,
    //   height: 300,
    // }

    return container;
  }

  getNavbar() {
    return <FullscreenNavbr {...this.props} />
  }
  getSideBar() {
    return <SideBar currentItemInfo={this.state.currentItemInfo} />
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
      paddingTop: '90px', // navbar size
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
