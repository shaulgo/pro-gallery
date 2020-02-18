import { GALLERY_CONSTS, INPUT_TYPES } from '../utils/constants';

export default {
  title: 'Item Size (smart)',
  isRelevant: (styleParams)  => styleParams.gallerySizeType === GALLERY_CONSTS.gallerySizeType.SMART,
  type: INPUT_TYPES.NUMBER,
  default: 30,
  description: `Set the item size between 1 to 100 units. The real size will be determined by the layout.
  `,
}