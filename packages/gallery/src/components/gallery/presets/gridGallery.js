import React from 'react';
import ProGallery from '../proGallery/proGallery';
import LAYOUTS from '../../../common/constants/layout';
import isEligibleForLeanGallery from '../leanGallery/isEligible';
import LeanGallery from '../leanGallery/leanGallery';
import { getImagesPerColStyleIfNeeded, getImagesPerRowStyleIfNeeded } from './utils/utils';

export const fixedStyles = {
  galleryLayout: LAYOUTS.GRID,
  cubeImages: true,
  isVertical: true,
  
  //this params were moved from the presets in layoutHelper and were not tested and checked yet.
  showArrows: false,
  smartCrop: false,
  galleryType: 'Columns',
  groupSize: 1,
  groupTypes: '1',
  fixedColumns: 0,
  gallerySize: 0,
  hasThumbnails: false,
  enableScroll: true,
  cropOnlyFill: false,
  isSlider: false,
  isColumns: false,
  isGrid: true,
  isMasonry: false,
  isSlideshow: false,
  minItemSize: 50,
}

export const createStyles = styles => {
   styles = Object.assign({}, styles, fixedStyles)
   const processedStyles = {
    ...getImagesPerRowStyleIfNeeded(styles),
    ...getImagesPerColStyleIfNeeded(styles),
  }

  return {
    ...processedStyles,
    gallerySize: processedStyles.modifiedGallerySize ? processedStyles.gallerySize : Math.round(processedStyles.gallerySize * 8.5 + 150),
    modifiedGallerySize: true
  }
}

export default class GridGallery extends React.Component {

  render() {

    const props = {...this.props, styles: createStyles(this.props.styles)};

    let GalleryComponent = ProGallery;
    if (isEligibleForLeanGallery(props)) {
      GalleryComponent = LeanGallery;
    }

    return (
      <GalleryComponent
        {...props}
      />
    );
  }
}
