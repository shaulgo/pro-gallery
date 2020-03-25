import { INPUT_TYPES, GALLERY_CONSTS } from './consts';
import {
  isSlideshowLayout,
  showThumbnailResize,
  oneRow,
  showSlideshowSettings,
  showAutoSlideshow,
} from './utils';

export default {
  slideshowLoop: {
    title: 'Loop Images',
    description: "",
    type: INPUT_TYPES.BOOLEAN,
    isRelevant: showSlideshowSettings,
  },
  isAutoSlideshow: {
    title: 'Auto Slide',
    description: "",
    type: INPUT_TYPES.BOOLEAN,
    isRelevant: showAutoSlideshow
  },
  autoSlideshowInterval: {
    title: 'Time Between Images',
    description: "",
    type: INPUT_TYPES.NUMBER,
    min: 2,
    max: 30,
    isRelevant: (sp) => showAutoSlideshow(sp) && sp.isAutoSlideshow,
  },
  slideshowInfoSize: {
    title: 'Info bar size',
    description: "",
    type: INPUT_TYPES.NUMBER,
    min: 0,
    max: 500,
    isRelevant: isSlideshowLayout,
  },
  playButtonForAutoSlideShow: {
    title: 'Play button',
    description: "",
    type: INPUT_TYPES.BOOLEAN,
    isRelevant: isSlideshowLayout,
  },
  scrollDirection: {
    title: "Scroll Direction",
    description: "",
    type: INPUT_TYPES.OPTIONS,
    options: [
      { value: 0, title: "Vertical" },
      { value: 1, title: "Horizontal" }
    ],
    isRelevant: sp => [GALLERY_CONSTS.LAYOUTS.EMPTY, GALLERY_CONSTS.LAYOUTS.COLLAGE, GALLERY_CONSTS.LAYOUTS.GRID].indexOf(sp.galleryLayout) > -1,
  },
  isVertical: {
    title: "Image Orientation",
    description: "",
    type: INPUT_TYPES.OPTIONS,
    options: [{ value: false, title: "Rows" }, { value: true, title: "Columns" }],
    isRelevant: sp => [GALLERY_CONSTS.LAYOUTS.COLLAGE, GALLERY_CONSTS.LAYOUTS.MASONRY].indexOf(sp.galleryLayout) > -1,
  },
  isRTL: {
    title: "Layout Direction",
    description: "",
    type: INPUT_TYPES.OPTIONS,
    options: [{ value: false, title: "Left to Right" }, { value: true, title: "Right to Left" }],
    isRelevant: sp => [GALLERY_CONSTS.LAYOUTS.PANORAMA].indexOf(sp.galleryLayout) === -1,
  },
  cubeImages: {
    title: "Allow Crop",
    description: "",
    type: INPUT_TYPES.BOOLEAN,
    isRelevant: showThumbnailResize,
  },
  cubeType: {
    title: "Thumbnail Resize",
    description: "",
    type: INPUT_TYPES.OPTIONS,
    options: [{ value: GALLERY_CONSTS.IMAGE_RESIZE.CROP, title: "Crop" }, { value: GALLERY_CONSTS.IMAGE_RESIZE.FIT, title: "Fit" }],
    isRelevant: showThumbnailResize,
  },
  cubeRatio: {
    title: "Image Ratio",
    description: "",
    type: INPUT_TYPES.OPTIONS,
    options: [
      { value: 16 / 9, title: "16:9" },
      { value: 4 / 3, title: "4:3" },
      { value: 1, title: "1:1" },
      { value: 3 / 4, title: "3:4" },
      { value: 9 / 16, title: "9:16" }
    ],
    isRelevant: sp => [GALLERY_CONSTS.LAYOUTS.EMPTY, GALLERY_CONSTS.LAYOUTS.GRID, GALLERY_CONSTS.LAYOUTS.SLIDER].indexOf(sp.galleryLayout) > -1 && sp.cubeType === GALLERY_CONSTS.IMAGE_RESIZE.crop,
  },
  gallerySliderImageRatio: {
    title: "Image Ratio - Slider",
    description: "",
    type: INPUT_TYPES.OPTIONS,
    options: [
      { value: 16 / 9, title: "16:9" },
      { value: 4 / 3, title: "4:3" },
      { value: 1, title: "1:1" },
      { value: 3 / 4, title: "3:4" },
      { value: 9 / 16, title: "9:16" }
    ],
    isRelevant: sp => sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.SLIDER && sp.cubeType === GALLERY_CONSTS.IMAGE_RESIZE.crop,
    todo: 'remove this param, merge it in the wrapper'
  },
  galleryThumbnailsAlignment: {
    title: "Thumbnail Placement",
    description: "",
    type: INPUT_TYPES.OPTIONS,
    options: [
      { value: GALLERY_CONSTS.THUMBNAILS_ALIGNMENT.BOTTOM, title: "Bottom" },
      { value: GALLERY_CONSTS.THUMBNAILS_ALIGNMENT.LEFT, title: "Left" },
      { value: GALLERY_CONSTS.THUMBNAILS_ALIGNMENT.TOP, title: "Top" },
      { value: GALLERY_CONSTS.THUMBNAILS_ALIGNMENT.RIGHT, title: "Right" }
    ],
    isRelevant: sp => [GALLERY_CONSTS.LAYOUTS.THUMBNAIL].indexOf(sp.galleryLayout) >= 0,
  },
  thumbnailSize: {
    title: "Thumbnail Size",
    description: "",
    type: INPUT_TYPES.NUMBER,
    min: 80,
    max: 300,
    isRelevant: sp => [GALLERY_CONSTS.LAYOUTS.THUMBNAIL].indexOf(sp.galleryLayout) >= 0,
  },
  gridStyle: {
    title: "Grid Style",
    description: "",
    type: INPUT_TYPES.OPTIONS,
    options: [
      { value: 0, title: "Fit To Screen" },
      { value: 1, title: "Set Items Per Row" }
    ],
    isRelevant: sp => ((sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.GRID || sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.COLLAGE) && !oneRow(sp)),
  },
  numberOfImagesPerRow: {
    title: "Images Per Row",
    description: "",
    type: INPUT_TYPES.NUMBER,
    min: 1,
    max: 5,
    isRelevant: sp => ((sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.GRID || sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.COLLAGE) && !oneRow(sp)) && sp.gridStyle === 1,
  },
  numberOfImagesPerCol: {
    title: "Images Per Column",
    description: "",
    type: INPUT_TYPES.NUMBER,
    min: 1,
    max: 3,
    isRelevant: sp => [GALLERY_CONSTS.LAYOUTS.GRID].indexOf(sp.galleryLayout) >= 0 && (sp.galleryLayout === GALLERY_CONSTS.LAYOUTS.COLLAGE && !oneRow(sp)),
  },
  thumbnailSpacings: {
    title: "Spacing between Thumbnails",
    description: "",
    type: INPUT_TYPES.NUMBER,
    min: 0,
    max: 30,
    units: "px",
    isRelevant: sp => [GALLERY_CONSTS.LAYOUTS.EMPTY, GALLERY_CONSTS.LAYOUTS.THUMBNAIL].indexOf(sp.galleryLayout) > -1,
  },
  imageMargin: {
    title: "Spacing between Items",
    description: "Set the spacing between the items in your gallery.",
    type: INPUT_TYPES.NUMBER,
    min: 0,
    max: 500,
    units: "px",
    isRelevant: sp => [GALLERY_CONSTS.LAYOUTS.EMPTY, GALLERY_CONSTS.LAYOUTS.COLLAGE, GALLERY_CONSTS.LAYOUTS.MASONRY, GALLERY_CONSTS.LAYOUTS.GRID, GALLERY_CONSTS.LAYOUTS.SLIDER, GALLERY_CONSTS.LAYOUTS.PANORAMA, GALLERY_CONSTS.LAYOUTS.COLUMN, GALLERY_CONSTS.LAYOUTS.BRICKS, GALLERY_CONSTS.LAYOUTS.MIX, GALLERY_CONSTS.LAYOUTS.ALTERNATE].indexOf(sp.galleryLayout) > -1,
  },
  collageDensity: {
    title: "Collage Density",
    description: "",
    type: INPUT_TYPES.NUMBER,
    min: 1,
    max: 100,
    step: 10,
    units: "%",
    isRelevant: sp => [GALLERY_CONSTS.LAYOUTS.EMPTY, GALLERY_CONSTS.LAYOUTS.COLLAGE].indexOf(sp.galleryLayout) >= 0,
  },
}
