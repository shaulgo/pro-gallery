import GalleryDriver from '../../drivers/pptrDriver';
import {toMatchImageSnapshot} from '../../drivers/matchers';
import GALLERY_CONSTS from '../../../src/common/constants';

jest.setTimeout(30000);

expect.extend({ toMatchImageSnapshot });

describe('isRTL - e2e', () => {
  let driver;

  beforeEach(async () => {
    driver = new GalleryDriver();
    await driver.launchBrowser();
  });

  afterEach(() => {
    driver.closeBrowser();
  });
  it('should render a left to right gallery', async () => {
    await driver.openPage({
      galleryLayout: GALLERY_CONSTS.LAYOUTS.EMPTY,
      isRTL: GALLERY_CONSTS.LAYOUT_DIRECTION.LEFT_TO_RIGHT,
    });
    await driver.waitFor.hookToBeVisible('item-container');
    const page = await driver.grab.elemScreenshot('.pro-gallery');
    expect(page).toMatchImageSnapshot();
  });
  it('should render a right to left gallery', async () => {
    await driver.openPage({
      galleryLayout: GALLERY_CONSTS.LAYOUTS.EMPTY,
      isRTL: GALLERY_CONSTS.LAYOUT_DIRECTION.RIGHT_TO_LEFT,
    });
    await driver.waitFor.hookToBeVisible('item-container');
    const page = await driver.grab.elemScreenshot('.pro-gallery');
    expect(page).toMatchImageSnapshot();
  });
});
