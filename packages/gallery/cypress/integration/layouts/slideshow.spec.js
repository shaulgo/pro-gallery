/// <reference types="Cypress" />
import { GALLERY_CONSTS } from 'pro-gallery-lib';

context('slideshow - e2e', () => {

  it('slideshow - scrollDirection = vertical', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.SLIDESHOW,
      scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL
    });
    cy.matchImageSnapshot();
  });
  
  it('slideshow - scrollDirection = horizontal', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.SLIDESHOW,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL
    });
    cy.matchImageSnapshot();
  });

})
