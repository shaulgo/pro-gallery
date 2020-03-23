import { GALLERY_CONSTS, INPUT_TYPES } from '../utils/constants';
import { createOptions } from '../utils/utils';

export default {
  title: 'Hover Effect',
  isRelevant: (styleParams)  => styleParams.titlePlacement === GALLERY_CONSTS.PLACEMENTS.SHOW_ON_HOVER,
  type: INPUT_TYPES.OPTIONS,
  default: GALLERY_CONSTS.INFO_BEHAVIOUR_ON_HOVER.APPEARS,
  options: createOptions('INFO_BEHAVIOUR_ON_HOVER'),
  description: `Determines whether the info appears or disappears or always shown or never shown on when hovering over items.
  `,
}
