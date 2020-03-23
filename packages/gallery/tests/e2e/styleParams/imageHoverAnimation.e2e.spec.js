import GalleryDriver from '../../drivers/pptrDriver';
import {toMatchImageSnapshot} from '../../drivers/matchers';
import GALLERY_CONSTS from '../../../src/common/constants';

jest.setTimeout(30000);

expect.extend({ toMatchImageSnapshot });

describe('imageHoverAnimation - e2e', () => {
  let driver;

  beforeEach(async () => {
    driver = new GalleryDriver();
    await driver.launchBrowser();
  });

  afterEach(() => {
    driver.closeBrowser();
  });

  Object.values(GALLERY_CONSTS.IMAGE_HOVER_ANIMATIONS).forEach( animationType => {
    it(`should have "${animationType}" animation`, async () => {
      await driver.openPage({
        galleryLayout: GALLERY_CONSTS.LAYOUTS.THUMBNAIL,
        imageHoverAnimation: animationType,
        hoveringBehaviour: GALLERY_CONSTS.INFO_BEHAVIOUR_ON_HOVER.NEVER_SHOW
      });
      await driver.waitFor.hookToBeVisible('item-container');
      await driver.actions.hover('item-container')[0];
      await driver.waitFor.timer(500);
      const page = await driver.grab.elemScreenshot('.pro-gallery');
      expect(page).toMatchImageSnapshot();
    });
  })
});
