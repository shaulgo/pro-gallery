import { GALLERY_CONSTS, INPUT_TYPES } from '../utils/constants';

export default {
  title: 'Item Size (relative to width)',
  isRelevant: (styleParams)  => styleParams.gallerySizeType === GALLERY_CONSTS.gallerySizeType.RATIO,
  type: INPUT_TYPES.NUMBER,
  default: 0,
  description: `Set the target size of each item relative to the container.
  `,
}