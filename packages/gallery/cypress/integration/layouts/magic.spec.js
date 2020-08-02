/// <reference types="Cypress" />
import { GALLERY_CONSTS } from 'pro-gallery-lib';

context('magic - e2e', () => {

  it('magic - scrollDirection = vertical, magicLayoutSeed = 1 (vertical)', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.MAGIC,
      magicLayoutSeed: 1,
      scrollDirection:GALLERY_CONSTS.scrollDirection.VERTICAL
    });
    cy.matchImageSnapshot();
  });

  it('magic - scrollDirection = horizontal, magicLayoutSeed = 1 (vertical)', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.MAGIC,
      magicLayoutSeed: 1,
      scrollDirection:GALLERY_CONSTS.scrollDirection.HORIZONTAL
    });
    cy.matchImageSnapshot();
  });
  
  it('magic - scrollDirection = vertical, magicLayoutSeed = 2 (horizontal)', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.MAGIC,
      magicLayoutSeed: 2,
      scrollDirection:GALLERY_CONSTS.scrollDirection.VERTICAL
    });
    cy.matchImageSnapshot();
  });

  it('magic - scrollDirection = horizontal, magicLayoutSeed = 2 (horizontal)', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.MAGIC,
      magicLayoutSeed: 2,
      scrollDirection:GALLERY_CONSTS.scrollDirection.HORIZONTAL
    });
    cy.matchImageSnapshot();
  });

})
