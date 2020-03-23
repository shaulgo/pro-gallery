import { GALLERY_CONSTS, INPUT_TYPES } from '../utils/constants';
import { createOptions } from '../utils/utils';

export default {
  title: 'Text Box Height Calculation Type',
  description: `Set the calc type (manual or automatic) to use when calculating the textbox height`,
  isRelevant: (styleParams) => (styleParams.isVertical &&
    styleParams.groupSize === 1 &&
    !styleParams.oneRow) &&
    (styleParams.titlePlacement === GALLERY_CONSTS.PLACEMENTS.SHOW_ABOVE ||
      styleParams.titlePlacement === GALLERY_CONSTS.PLACEMENTS.SHOW_BELOW) &&
    (styleParams.allowTitle || styleParams.allowDescription),
  type: INPUT_TYPES.OPTIONS,
  options: createOptions('TEXT_BOX_HEIGHT_CALCULATION_OPTIONS'),
  default: GALLERY_CONSTS.TEXT_BOX_HEIGHT_CALCULATION_OPTIONS.AUTOMATIC,
}
