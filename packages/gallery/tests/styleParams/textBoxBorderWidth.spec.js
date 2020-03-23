import GalleryDriver from '../drivers/reactDriver'
import { expect } from 'chai';
import { images2 } from '../drivers/mocks/items';
import { styleParams, container } from '../drivers/mocks/styles';
import GALLERY_CONSTS from '../../src/common/constants';

describe('styleParam - textBoxBorderWidth', () => {

  let driver;
  const initialProps = {
    container,
    items: images2,
    styles: styleParams
  };

  beforeEach(() => {
    driver = new GalleryDriver();
  });

  it('should set border-width to the text container when "imageInfoType" is "SEPARATED_BACKGROUND"', () => {
    Object.assign(initialProps.styles, {
      galleryLayout:  GALLERY_CONSTS.LAYOUTS.GRID,
      imageInfoType: GALLERY_CONSTS.INFO_TYPE.SEPARATED_BACKGROUND,
      scrollDirection: GALLERY_CONSTS.SCROLL_DIRECTION.VERTICAL,
      titlePlacement: GALLERY_CONSTS.PLACEMENTS.SHOW_BELOW,
      oneRow: false,
      allowTitle: true,
      textBoxBorderWidth: 10,
    });
    driver.mount.proGallery(initialProps);
    const textsStyles = driver.find.selector('.gallery-item-bottom-info').at(0).parent();
    expect(textsStyles.props().style.borderWidth).to.eq('10px')
    driver.detach.proGallery();
  });
  it('should not set border-width to the text container when "imageInfoType" is not "SEPARATED_BACKGROUND"', () => {
    Object.assign(initialProps.styles, {
      galleryLayout:  GALLERY_CONSTS.LAYOUTS.GRID,
      imageInfoType: GALLERY_CONSTS.INFO_TYPE.NO_BACKGROUND,
      scrollDirection: GALLERY_CONSTS.SCROLL_DIRECTION.VERTICAL,
      titlePlacement: GALLERY_CONSTS.PLACEMENTS.SHOW_BELOW,
      oneRow: false,
      allowTitle: true,
      textBoxBorderWidth: 10,
    });
    driver.mount.proGallery(initialProps);
    const textsStyles = driver.find.selector('.gallery-item-bottom-info').at(0).parent();
    expect(textsStyles.props().style.borderWidth).to.eq(undefined);
    driver.detach.proGallery();
  });
});
