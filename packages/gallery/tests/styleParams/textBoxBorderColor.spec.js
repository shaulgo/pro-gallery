import GalleryDriver from '../drivers/reactDriver'
import { expect } from 'chai';
import { images2 } from '../drivers/mocks/items';
import { styleParams, container } from '../drivers/mocks/styles';
import GALLERY_CONSTS from '../../src/common/constants';

describe('styleParam - textBoxBorderColor', () => {
  let driver;
  const initialProps = {
    container,
    items: images2,
    styles: styleParams
  };
  beforeEach(() => {
    driver = new GalleryDriver();
  });
  it('should set border-color to the text container when "imageInfoType" is "SEPARATED_BACKGROUND"', () => {
    Object.assign(initialProps.styles, {
      galleryLayout:  GALLERY_CONSTS.LAYOUTS.GRID,
      imageInfoType: GALLERY_CONSTS.INFO_TYPE.SEPARATED_BACKGROUND,
      scrollDirection: GALLERY_CONSTS.SCROLL_DIRECTION.VERTICAL,
      titlePlacement: GALLERY_CONSTS.PLACEMENTS.SHOW_BELOW,
      oneRow: false,
      allowTitle: true,
      textBoxBorderColor: { value : 'rgba(0,0,0,0)'},
    });
    driver.mount.proGallery(initialProps);
    const textsStyles = driver.find.selector('.gallery-item-bottom-info').at(0).parent();
    expect(textsStyles.props().style.borderColor).to.eq('rgba(0,0,0,0)')
    driver.detach.proGallery();
  });
  it('should not set border-color to the text container when "imageInfoType" is not "SEPARATED_BACKGROUND"', () => {
    Object.assign(initialProps.styles, {
      galleryLayout:  GALLERY_CONSTS.LAYOUTS.GRID,
      imageInfoType: GALLERY_CONSTS.INFO_TYPE.NO_BACKGROUND,
      scrollDirection: GALLERY_CONSTS.SCROLL_DIRECTION.VERTICAL,
      titlePlacement: GALLERY_CONSTS.PLACEMENTS.SHOW_BELOW,
      oneRow: false,
      allowTitle: true,
      textBoxBorderColor: { value : 'rgba(0,0,0,0)'},
    });
    driver.mount.proGallery(initialProps);
    const textsStyles = driver.find.selector('.gallery-item-bottom-info').at(0).parent();
    expect(textsStyles.props().style.borderColor).to.eq(undefined);
    driver.detach.proGallery();
  });
});
