/// <reference types="Cypress" />
import { GALLERY_CONSTS } from 'pro-gallery-lib';

context('mix - e2e', () => {

  it('mix - scrollDirection = vertical', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.MIX,
      scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL
    });
    cy.matchImageSnapshot();
  });
  it('mix - scrollDirection = horizontal', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.MIX,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL
    });
    cy.matchImageSnapshot();
  });

})
