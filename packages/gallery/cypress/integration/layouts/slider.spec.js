/// <reference types="Cypress" />
import { GALLERY_CONSTS } from 'pro-gallery-lib';

context('slider - e2e', () => {

  beforeEach(async () => {
  });

  afterEach(() => {
    driver.closeBrowser();
  });
  it('slider - scrollDirection = vertical', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.SLIDER,
      scrollDirection: GALLERY_CONSTS.scrollDirection.VERTICAL,
      cubeRatio: 16/9,
    });
    cy.matchImageSnapshot();
  });
  it('slider - scrollDirection = horizontal', () => {
    cy.navigateWithParams({
      galleryLayout: GALLERY_CONSTS.layout.SLIDER,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL,
      cubeRatio: 16/9,
    });
    cy.matchImageSnapshot();
  });

})
