/// <reference types="Cypress" />
import { GALLERY_CONSTS } from 'pro-gallery-lib';

context('leanGallery - e2e', () => {

  const fixedLeanGalleryStyleParams = {
    allowLeanGallery: true,
    galleryLayout: GALLERY_CONSTS.layout.GRID,
    gallerySize: 370,
    isVertical: true,
    cubeImages: true,
    cubeRatio: 1,
    groupSize: 1,
    titlePlacement: GALLERY_CONSTS.placements.SHOW_BELOW,
    imageInfoType: GALLERY_CONSTS.infoType.DONT_SHOW,
    scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL,
  };

  it('should successfully render leanGallery', () => {
    cy.navigateWithParams({
      ...fixedLeanGalleryStyleParams,
    });
    cy.matchImageSnapshot();
  });


  it('should NOT render leanGallery (beacause scrollDirection: HORIZONTAL)', () => {
    cy.navigateWithParams({
      ...fixedLeanGalleryStyleParams,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL
    });
    cy.matchImageSnapshot();
  });

  it('should NOT render leanGallery (beacause titlePlacement: SHOW_ON_THE_RIGHT)', () => {
    cy.navigateWithParams({
      ...fixedLeanGalleryStyleParams,
      titlePlacement: GALLERY_CONSTS.placements.SHOW_ON_THE_RIGHT
    });
    cy.matchImageSnapshot();
  });

  it('should NOT render leanGallery (beacause imageHoverAnimation: ZOOM_IN)', () => {
    cy.navigateWithParams({
      ...fixedLeanGalleryStyleParams,
      imageHoverAnimation: GALLERY_CONSTS.imageHoverAnimations.ZOOM_IN
    });
    cy.matchImageSnapshot();
  });
})
