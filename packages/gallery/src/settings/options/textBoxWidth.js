import { INPUT_TYPES } from '../utils/constants';

export default {
  title: 'Text Box Width',
  description: `Set the text box width when on the right side or on the left side.`,
  isRelevant: (styleParams) => true,
  type: INPUT_TYPES.NUMBER,
  default: 200,
}
