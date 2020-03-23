import { GALLERY_CONSTS, INPUT_TYPES } from '../utils/constants';

export default {
  title: 'Text Box Border Radius',
  description: `Set the border radius of the texts container for each item.`,
  isRelevant: (styleParams) => styleParams.titlePlacement !==
    GALLERY_CONSTS.PLACEMENTS.SHOW_ON_HOVER &&
    (styleParams.allowTitle || styleParams.allowDescription) &&
    styleParams.imageInfoType === GALLERY_CONSTS.INFO_TYPE.SEPARATED_BACKGROUND,
  type: INPUT_TYPES.NUMBER,
  default: 0,
}
