import { GALLERY_CONSTS, INPUT_TYPES } from '../utils/constants';
import { createOptions } from '../utils/utils';

export default {
  title: 'Horizontal Text Alignment',
  isRelevant: (styleParams)  => styleParams.allowTitle || styleParams.allowDescription,
  type: INPUT_TYPES.OPTIONS,
  default: GALLERY_CONSTS.HORIZONTAL_ALIGN.CENTER,
  options: createOptions('HORIZONTAL_ALIGN'),
  description: `Choose the horizontal alignment of the texts container.
  `,
}
