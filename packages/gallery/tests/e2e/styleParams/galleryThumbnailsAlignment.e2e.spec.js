import GalleryDriver from '../../drivers/pptrDriver';
import {toMatchImageSnapshot} from '../../drivers/matchers';
import GALLERY_CONSTS from '../../../src/common/constants';

jest.setTimeout(30000);

expect.extend({ toMatchImageSnapshot });

describe('galleryThumbnailsAlignment - e2e', () => {
  let driver;

  beforeEach(async () => {
    driver = new GalleryDriver();
    await driver.launchBrowser();
  });

  afterEach(() => {
    driver.closeBrowser();
  });
  it('should place thumbnails in the bottom', async () => {
    await driver.openPage({
      galleryLayout: GALLERY_CONSTS.LAYOUTS.THUMBNAIL,
      galleryThumbnailsAlignment: GALLERY_CONSTS.THUMBNAILS_ALIGNMENT.BOTTOM
    });
    await driver.waitFor.hookToBeVisible('item-container');
    const page = await driver.grab.elemScreenshot('.pro-gallery');
    expect(page).toMatchImageSnapshot();
  });
  it('should place thumbnails on top', async () => {
    await driver.openPage({
      galleryLayout: GALLERY_CONSTS.LAYOUTS.THUMBNAIL,
      galleryThumbnailsAlignment: GALLERY_CONSTS.THUMBNAILS_ALIGNMENT.TOP
    });
    await driver.waitFor.hookToBeVisible('item-container');
    const page = await driver.grab.elemScreenshot('.pro-gallery');
    expect(page).toMatchImageSnapshot();
  });
  it('should place thumbnails on the left', async () => {
    await driver.openPage({
      galleryLayout: GALLERY_CONSTS.LAYOUTS.THUMBNAIL,
      galleryThumbnailsAlignment: GALLERY_CONSTS.THUMBNAILS_ALIGNMENT.LEFT
    });
    await driver.waitFor.hookToBeVisible('item-container');
    const page = await driver.grab.elemScreenshot('.pro-gallery');
    expect(page).toMatchImageSnapshot();
  });
  it('should place thumbnails on the right', async () => {
    await driver.openPage({
      galleryLayout: GALLERY_CONSTS.LAYOUTS.THUMBNAIL,
      galleryThumbnailsAlignment: GALLERY_CONSTS.THUMBNAILS_ALIGNMENT.RIGHT
    });
    await driver.waitFor.hookToBeVisible('item-container');
    const page = await driver.grab.elemScreenshot('.pro-gallery');
    expect(page).toMatchImageSnapshot();
  });
});
