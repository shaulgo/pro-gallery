/// <reference types="Cypress" />
import { GALLERY_CONSTS } from 'pro-gallery-lib';

context('collage - e2e', () => {
  
  it('collage - scrollDirection = vertical', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.COLLAGE,
      scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL
    });
    cy.matchImageSnapshot();
  });

  it('collage - scrollDirection = horizontal', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.COLLAGE,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL
    });
    cy.matchImageSnapshot();
  });

})
