/// <reference types="Cypress" />
import { GALLERY_CONSTS } from 'pro-gallery-lib';

context('thumbnail - e2e', () => {

  it('thumbnail - scrollDirection = vertical', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.THUMBNAIL,
      scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL
    });
    cy.matchImageSnapshot();
  });
  
  it('thumbnail - scrollDirection = horizontal', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.THUMBNAIL,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL
    });
    cy.matchImageSnapshot();
  });

})
