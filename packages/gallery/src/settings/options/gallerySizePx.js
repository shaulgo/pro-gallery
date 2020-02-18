import { GALLERY_CONSTS, INPUT_TYPES } from '../utils/constants';

export default {
  title: 'Item Size (in pixels)',
  isRelevant: (styleParams)  => styleParams.gallerySizeType === GALLERY_CONSTS.gallerySizeType.PIXELS,
  type: INPUT_TYPES.NUMBER,
  default: 0,
  description: `Set the target size of each item in pixels.
  `,
}