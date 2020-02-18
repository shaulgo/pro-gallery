import GalleryDriver from '../drivers/reactDriver'
import { expect } from 'chai';
import { images2 } from '../drivers/mocks/items';
import { styleParams, container } from '../drivers/mocks/styles';
import { addLayoutStyles } from '../../src/components/helpers/layoutHelper';
import GALLERY_CONSTS from '../../src/common/constants';

describe('styleParam - gallerySizeType', () => {

  let driver;
  const initialProps = {
    container,
    items: images2,
    styles: styleParams
  }

  beforeEach(() => {
    driver = new GalleryDriver();
  });
  
  it('should "gallerySize" from "gallerySize" (gallerySizeType = SMART)', () => {
    Object.assign(initialProps.styles, {
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      gallerySizeType: GALLERY_CONSTS.gallerySizeType.SMART,
      gallerySize: 70,
      gallerySizePx: 80,
      gallerySizeRatio: 100,
    }) 
   const proccessedStyles = addLayoutStyles(initialProps.styles);
   expect(proccessedStyles.gallerySize).to.eq(70);
  });

  it('should "gallerySize" from gallerySizePx (gallerySizeType = PIXELS)', () => {
    Object.assign(initialProps.styles, {
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      gallerySizeType: GALLERY_CONSTS.gallerySizeType.PIXELS,
      gallerySize: 70,
      gallerySizePx: 80,
      gallerySizeRatio: 100,
    })
    
   const proccessedStyles = addLayoutStyles(initialProps.styles);
   expect(proccessedStyles.gallerySize).to.eq(80);
  });

  it('should "gallerySize" from gallerySizeRatio (gallerySizeType = RATIO)', () => {
    Object.assign(initialProps.styles, {
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      gallerySizeType: GALLERY_CONSTS.gallerySizeType.RATIO,
      gallerySize: 70,
      gallerySizePx: 80,
      gallerySizeRatio: 100,
    }) 
   const proccessedStyles = addLayoutStyles(initialProps.styles);
   expect(proccessedStyles.gallerySize).to.eq(window.innerWidth * (initialProps.styles.gallerySizeRatio / 100));
  });
})

