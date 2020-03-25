import { GALLERY_CONSTS, INPUT_TYPES } from '../utils/constants';

export default {
  title: 'Item Shadow Direction',
  isRelevant: (styleParams) => styleParams.itemEnableShadow && !styleParams.oneRow &&
    !(styleParams.cubeImages && styleParams.cubeType === GALLERY_CONSTS.IMAGE_RESIZE.FIT) &&
    (styleParams.imageInfoType === GALLERY_CONSTS.INFO_TYPE.ATTACHED_BACKGROUND ||
      styleParams.titlePlacement === GALLERY_CONSTS.PLACEMENTS.SHOW_ON_HOVER),
  type: INPUT_TYPES.COLOR_PICKER,
  default: { value: 'rgba(0,0,0,.3)' },
}
