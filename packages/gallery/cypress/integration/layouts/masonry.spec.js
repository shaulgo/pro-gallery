/// <reference types="Cypress" />
import { GALLERY_CONSTS } from 'pro-gallery-lib';

context('masonry - e2e', () => {

  beforeEach(async () => {
  });

  afterEach(() => {
  });

  it('masonry - scrollDirection = vertical', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.MASONRY,
      scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL
    });
    cy.matchImageSnapshot();
  });
  it('masonry - scrollDirection = horizontal', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.MASONRY,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL
    });
    cy.matchImageSnapshot();
  });
  it('masonry horizontal orientation', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.MASONRY,
      allowDescription: true,
      itemBorderRadius: 50,
      hoveringBehaviour: GALLERY_CONSTS.infoBehaviourOnHover.NO_CHANGE,
    });
    cy.matchImageSnapshot();
  });

})
