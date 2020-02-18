import { GALLERY_CONSTS, INPUT_TYPES } from '../utils/constants';
import { createOptions } from '../utils/utils';

export default {
  title: 'Item Size Units',
  isRelevant: (styleParams) => true,
  type: INPUT_TYPES.OPTIONS,
  default: GALLERY_CONSTS.gallerySizeType.SMART,
  options: createOptions('gallerySizeType'),
  description: `Choose the units to use when setting the target size of each item in the gallery:
  by layout, relative to width or in pixels`,
}