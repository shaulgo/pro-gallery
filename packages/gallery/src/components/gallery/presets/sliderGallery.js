
import React from 'react';
import ProGallery from '../proGallery/proGallery';
import LAYOUTS from '../../../common/constants/layout';
import dimensionsHelper from '../../helpers/dimensionsHelper';

export const fixedStyles = {
  //tested params
  galleryLayout: LAYOUTS.SLIDER,
  enableInfiniteScroll: true,
  cubeImages: true,
  oneRow: true,
  isVertical: false,
  groupSize: 1,
  groupTypes: '1',
  
  //this params were moved from the presets in layoutHelper and were not tested and checked yet.
  showArrows: true,
  smartCrop: false,
  galleryType: 'Strips',
  gallerySize: () => dimensionsHelper.getGalleryHeight(),
  hasThumbnails: false,
  enableScroll: true,
  scrollSnap: true,
  isGrid: false,
  isSlider: true,
  isColumns: false,
  isMasonry: false,
  isSlideshow: false,
  cropOnlyFill: true,

}

export const createStyles = styles => {
  return {
    ...styles,
    ...fixedStyles,
  }
}

export default class SliderGallery extends React.Component {

  render() {
    
    return (
      <ProGallery
        {...this.props}
        styles={
          createStyles(this.props.styles)
        }
      />
    );
  }
}
