import { GALLERY_CONSTS, INPUT_TYPES } from '../utils/constants';
import { createOptions } from '../utils/utils';

export default {
  title: 'Overlay Hover Animation',
  isRelevant: (styleParams) =>
    styleParams.hoveringBehaviour !== GALLERY_CONSTS.INFO_BEHAVIOUR_ON_HOVER.NO_CHANGE &&
    styleParams.hoveringBehaviour !== GALLERY_CONSTS.INFO_BEHAVIOUR_ON_HOVER.NEVER_SHOW,
  type: INPUT_TYPES.OPTIONS,
  default: GALLERY_CONSTS.OVERLAY_ANIMATIONS.NO_EFFECT,
  options: createOptions('OVERLAY_ANIMATIONS'),
  description: `Choose the overlay animation effect to be used when hovering over an item`,
}
