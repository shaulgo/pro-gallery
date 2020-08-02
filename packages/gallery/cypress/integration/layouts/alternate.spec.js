/// <reference types="Cypress" />
import { GALLERY_CONSTS } from 'pro-gallery-lib';

context('alternate - e2e', () => {
  
  it('alternate layout - scrollDirection = vertical', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.ALTERNATE,
      scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL
    })
    cy.matchImageSnapshot();
  });
  it('alternate layout - scrollDirection = horizontal', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.ALTERNATE,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL
    })
    cy.matchImageSnapshot();
  });
})
