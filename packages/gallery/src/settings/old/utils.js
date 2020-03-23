
import { GALLERY_CONSTS } from './consts';

export const showColorOverlay = (sp, context = {}) => {
  const hasHoverOnMobile = sp => {
    const firstTapSimulatesHover = sp.itemClick === GALLERY_CONSTS.ITEM_CLICK.NOTHING ||
      (showTexts(sp) &&
        (
          (layoutPresentOuterInformation(sp) && sp.titlePlacement === GALLERY_CONSTS.PLACEMENTS.SHOW_ON_HOVER) ||
          !layoutPresentOuterInformation(sp)
        )
      )
      ;

    return !isSlideshowLayout(sp) &&
      firstTapSimulatesHover;
  };
  if (context.isMobile) {
    return hasHoverOnMobile(sp);
  }
  return !isSlideshowLayout(sp);
};


export const isSlideshowLayout = sp => {
  return [GALLERY_CONSTS.LAYOUTS.SLIDESHOW, GALLERY_CONSTS.LAYOUTS.FULLSIZE].indexOf(sp.galleryLayout) > -1;
}

export const isHorizontalLayout = sp => {
  return [GALLERY_CONSTS.LAYOUTS.THUMBNAIL, GALLERY_CONSTS.LAYOUTS.SLIDER, GALLERY_CONSTS.LAYOUTS.SLIDESHOW, GALLERY_CONSTS.LAYOUTS.FULLSIZE, GALLERY_CONSTS.LAYOUTS.COLUMN].indexOf(sp.galleryLayout) > -1 ||
    ((sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.GRID || sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.COLLAGE) && !oneRow(sp));
}

export const layoutPresentOuterInformation = sp =>
  [GALLERY_CONSTS.LAYOUTS.PANORAMA, GALLERY_CONSTS.LAYOUTS.COLUMN, GALLERY_CONSTS.LAYOUTS.SLIDER].indexOf(sp.galleryLayout) > -1 ||
  (sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.MASONRY && sp.isVertical) ||
  (sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.GRID && !oneRow(sp))

export const layoutPresentSideOuterInformation = sp =>
  !oneRow(sp) && sp.isVertical && sp.groupSize === 1;

export const showTexts = sp => sp.allowTitle || sp.allowDescription;
export const showAlignTextVertical = sp => [GALLERY_CONSTS.LAYOUTS.COLLAGE, GALLERY_CONSTS.LAYOUTS.MASONRY, GALLERY_CONSTS.LAYOUTS.GRID, GALLERY_CONSTS.LAYOUTS.THUMBNAIL, GALLERY_CONSTS.LAYOUTS.SLIDER, GALLERY_CONSTS.LAYOUTS.PANORAMA, GALLERY_CONSTS.LAYOUTS.COLUMN, GALLERY_CONSTS.LAYOUTS.MAGIC].indexOf(sp.galleryLayout) > -1 && sp.titlePlacement === GALLERY_CONSTS.PLACEMENTS.SHOW_ON_HOVER;
export const presentOuterInformation = sp => layoutPresentOuterInformation(sp) && sp.titlePlacement !== GALLERY_CONSTS.PLACEMENTS.SHOW_ON_HOVER;
export const presentSideOuterInformation = sp => layoutPresentSideOuterInformation(sp) && (sp.titlePlacement === GALLERY_CONSTS.PLACEMENTS.SHOW_ON_THE_RIGHT || sp.titlePlacement === GALLERY_CONSTS.PLACEMENTS.SHOW_ON_THE_LEFT);
export const isTitlePlacementAlwaysShown = sp => layoutPresentOuterInformation(sp) || isSlideshowLayout(sp) || sp.titlePlacement !== GALLERY_CONSTS.PLACEMENTS.SHOW_ON_HOVER;
export const showInfiniteScroll = sp => !oneRow(sp);
export const showItemBorderAndShadowConfig = sp => !(sp.cubeType === 'fit' && showThumbnailResize(sp)) // check cubeType exists
export const showThumbnailResize = sp => [GALLERY_CONSTS.LAYOUTS.EMPTY, GALLERY_CONSTS.LAYOUTS.GRID, GALLERY_CONSTS.LAYOUTS.THUMBNAIL, GALLERY_CONSTS.LAYOUTS.SLIDER, GALLERY_CONSTS.LAYOUTS.SLIDESHOW, GALLERY_CONSTS.LAYOUTS.FULLSIZE].indexOf(sp.galleryLayout) > -1;
export const showShadow = sp => showItemBorderAndShadowConfig(sp) && !isHorizontalLayout(sp) && (sp.imageInfoType === GALLERY_CONSTS.INFO_TYPE.ATTACHED_BACKGROUND || sp.titlePlacement === GALLERY_CONSTS.PLACEMENTS.SHOW_ON_HOVER);
export const oneRow = sp => sp.oneRow || sp.scrollDirection === GALLERY_CONSTS.SCROLL_DIRECTION.horizontal;
export const showSlideshowSettings = sp => [GALLERY_CONSTS.LAYOUTS.THUMBNAIL, GALLERY_CONSTS.LAYOUTS.SLIDER, GALLERY_CONSTS.LAYOUTS.SLIDESHOW, GALLERY_CONSTS.LAYOUTS.FULLSIZE, GALLERY_CONSTS.LAYOUTS.COLUMN].indexOf(sp.galleryLayout) > -1;
export const showAutoSlideshow = sp => [GALLERY_CONSTS.LAYOUTS.THUMBNAIL, GALLERY_CONSTS.LAYOUTS.SLIDER, GALLERY_CONSTS.LAYOUTS.SLIDESHOW, GALLERY_CONSTS.LAYOUTS.FULLSIZE].indexOf(sp.galleryLayout) > -1;
export const showImagesDisplaySection = sp => [GALLERY_CONSTS.LAYOUTS.EMPTY, GALLERY_CONSTS.LAYOUTS.COLLAGE, GALLERY_CONSTS.LAYOUTS.MASONRY, GALLERY_CONSTS.LAYOUTS.GRID, GALLERY_CONSTS.LAYOUTS.THUMBNAIL, GALLERY_CONSTS.LAYOUTS.SLIDER, GALLERY_CONSTS.LAYOUTS.SLIDESHOW, GALLERY_CONSTS.LAYOUTS.FULLSIZE, GALLERY_CONSTS.LAYOUTS.PANORAMA, GALLERY_CONSTS.LAYOUTS.COLUMN].indexOf(sp.galleryLayout) > -1;
export const showHoveringBehaviour = sp => showImagesDisplaySection(sp) && !isSlideshowLayout(sp) && showTexts(sp) && ((presentOuterInformation(sp) && sp.titlePlacement === GALLERY_CONSTS.PLACEMENTS.SHOW_ON_HOVER) || !presentOuterInformation(sp));
export const showTextSubSection = sp => showTexts(sp);
export const showButtonSection = sp => showInfiniteScroll(sp) && !sp.enableInfiniteScroll && isStore(sp);
export const showExpendSection = sp => sp.itemClick === GALLERY_CONSTS.ITEM_CLICK.EXPAND || isStore(sp);
export const showScrollAnimations = sp => !oneRow(sp);
export const showGallerySize = sp => ((sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.GRID || sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.COLLAGE) && !oneRow(sp)) ? sp.gridStyle === 0 : [GALLERY_CONSTS.LAYOUTS.EMPTY, GALLERY_CONSTS.LAYOUTS.COLLAGE, GALLERY_CONSTS.LAYOUTS.MASONRY].indexOf(sp.galleryLayout) >= 0;

// implement
export const isStore = (sp) => sp.isStore;
export const showAddToCartSection = (sp) => isStore(sp) && sp.showAddToCartSection; // providerApi.hasAddToCart();
export const canUseWatermark = (sp) => isStore(sp) && sp.canUseWatermark; // mediaUploaded || !isDemoImage;

export const always = () => true;

export const isLayout = (sp, layouts) => sp.galleryLayout === -1 || layouts.indexOf(sp.galleryLayout) >= 0;
