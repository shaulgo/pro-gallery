import { featureManager } from '../../../helpers/versionsHelper';
import GALLERY_CONSTS from '../../../../common/constants';

export const getImagesPerRowStyleIfNeeded = (styles) => {
  const processedStyles = styles;
  if (
    (!processedStyles.oneRow && processedStyles.scrollDirection === GALLERY_CONSTS.scrollDirection.VERTICAL) ||
    (featureManager.supports.fixedColumnsInMasonry &&
      processedStyles.isMasonry &&
      processedStyles.isVertical)
  ) {
    // if (canSet('numberOfImagesPerRow', 'fixedColumns')) {
    //If toggle is for Items per row, fill the fixedColumns with the number of items
    //If toggle is responsive, make fixedColumns to be 0 or undefined;
    //Show the new controls only on Vertical scroll (one ow is false)
    processedStyles.fixedColumns =
      String(processedStyles.gridStyle) === '1'
        ? Number(processedStyles.numberOfImagesPerRow)
        : 0;
    processedStyles.groupTypes = '1';
    processedStyles.groupSize = 1;
    processedStyles.collageAmount = 0;
    processedStyles.collageDensity = 0;
    // }
  }
  return processedStyles;
}

export const getImagesPerColStyleIfNeeded = (styles) => {
  const processedStyles = styles;
  if (
    typeof processedStyles.numberOfImagesPerCol !== 'undefined' &&
    (processedStyles.oneRow || processedStyles.scrollDirection === GALLERY_CONSTS.scrollDirection.HORIZONTAL)
  ) {
    processedStyles.fixedColumns = 0;
    switch (processedStyles.numberOfImagesPerCol) {
      case 1:
      default:
        processedStyles.groupTypes = '1';
        processedStyles.groupSize = 1;
        processedStyles.collageAmount = 0;
        processedStyles.collageDensity = 0;
        break;
      case 2:
        processedStyles.groupTypes = '2v';
        processedStyles.groupSize = 2;
        processedStyles.collageAmount = 1;
        processedStyles.collageDensity = 1;
        break;
      case 3:
        processedStyles.groupTypes = '3v';
        processedStyles.groupSize = 3;
        processedStyles.collageAmount = 1;
        processedStyles.collageDensity = 1;
        break;
    }
  }
  return processedStyles;
}