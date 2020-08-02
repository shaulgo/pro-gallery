/// <reference types="Cypress" />
import { GALLERY_CONSTS } from 'pro-gallery-lib';

context('grid - e2e', () => {

  it('grid - scrollDirection = vertical', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL,
      // hoveringBehaviour: GALLERY_CONSTS.infoBehaviourOnHover.NO_CHANGE,
    });
    cy.matchImageSnapshot();
  });
  it('grid - scrollDirection = horizontal', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL
    }); 
    cy.matchImageSnapshot();
  });
})
