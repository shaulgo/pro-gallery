import { INPUT_TYPES, GALLERY_CONSTS } from '../utils/constants';
import { createOptions } from '../utils/utils';

export default {
  title: 'Scroll Animation',
  description: `Choose the type of animation to be used when items appear while scrolling verticaly through the gallery`,
  isRelevant: (styleParams) => !styleParams.oneRow,
  options: createOptions('SCROLL_ANIMATIONS'),
  type: INPUT_TYPES.OPTIONS,
  default: GALLERY_CONSTS.SCROLL_ANIMATIONS.NO_EFFECT,
}
