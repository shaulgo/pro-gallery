/// <reference types="Cypress" />
import { GALLERY_CONSTS } from 'pro-gallery-lib';

context('empty - e2e', () => {

  it('empty - scrollDirection = vertical', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.EMPTY,
      scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL
    });
    cy.matchImageSnapshot();
  });

  it('empty - scrollDirection = horizontal', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.EMPTY,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL
    });
    cy.matchImageSnapshot();
  });
})
