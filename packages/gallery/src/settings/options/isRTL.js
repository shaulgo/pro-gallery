import { GALLERY_CONSTS, INPUT_TYPES } from '../utils/constants';
import { createOptions } from '../utils/utils';

export default {
  title: 'Layout Direction',
  isRelevant: () => true,
  type: INPUT_TYPES.OPTIONS,
  default: GALLERY_CONSTS.LAYOUT_DIRECTION.LEFT_TO_RIGHT,
  options: createOptions('LAYOUT_DIRECTION'),
  description: `Set the direction of the gallery layout (right to left or left to right)`,
}
