import { GALLERY_CONSTS } from 'pro-gallery-lib';

class ViewModeWrapper {
  constructor() {
    this.setViewMode = this.setViewMode.bind(this);
    this.isSiteMode = this.isSiteMode.bind(this);
    this.isEditMode = this.isEditMode.bind(this);
    this.isPrerenderMode = this.isPrerenderMode.bind(this);
    this.isPreviewMode = this.isPreviewMode.bind(this);
    this.isSEOMode = this.isSEOMode.bind(this);
    this.setFormFactor = this.setFormFactor.bind(this);
    this.isFormFactorDesktop = this.isFormFactorDesktop.bind(this);
    this.isFormFactorMobile = this.isFormFactorMobile.bind(this);
    this.isFormFactorTablet = this.isFormFactorTablet.bind(this);
    this.isFormFactorTouch = this.isFormFactorTouch.bind(this);
    this._viewMode = GALLERY_CONSTS.viewMode.SITE;
    this._formFactor = GALLERY_CONSTS.formFactor.DESKTOP;
  }

  setViewMode(viewMode) {
    this._viewMode = viewMode;
  }
  setFormFactor(forceVal) {
    this._formFactor = forceVal;
  }

  isFormFactorMobile() {
    return this._formFactor === GALLERY_CONSTS.formFactor.MOBILE;
  }
  isFormFactorTablet() {
    return this._formFactor === GALLERY_CONSTS.formFactor.TABLET;
  }
  isFormFactorDesktop() {
    return this._formFactor === GALLERY_CONSTS.formFactor.DESKTOP;
  }
  isFormFactorTouch() {
    return this.isMobile() || this.isTablet();
  }

  isSiteMode() {
    return this._viewMode === GALLERY_CONSTS.viewMode.SITE;
  }

  isEditMode() {
    return this._viewMode === GALLERY_CONSTS.viewMode.EDIT;
  }

  isPreviewMode() {
    return this._viewMode === GALLERY_CONSTS.viewMode.PREVIEW;
  }

  isPrerenderMode() {
    return this._viewMode === GALLERY_CONSTS.viewMode.PRERENDER
  }

  isSEOMode() {
    return this._viewMode === GALLERY_CONSTS.viewMode.SEO;
  }
}

const viewModeWrapper = new ViewModeWrapper();
const isSiteMode = viewModeWrapper.isSiteMode;
const isEditMode = viewModeWrapper.isEditMode;
const isPreviewMode = viewModeWrapper.isPreviewMode;
const isSEOMode = viewModeWrapper.isSEOMode;
const isFormFactorMobile = viewModeWrapper.isFormFactorMobile;
const isFormFactorTablet = viewModeWrapper.isFormFactorTablet;
const isFormFactorDesktop = viewModeWrapper.isFormFactorDesktop;
const isFormFactorTouch = viewModeWrapper.isFormFactorTouch;
const isPrerenderMode = viewModeWrapper.isPrerenderMode;

export { viewModeWrapper, isSiteMode, isEditMode, isPreviewMode, isSEOMode, isFormFactorMobile, isFormFactorTablet, isFormFactorDesktop, isFormFactorTouch, isPrerenderMode };
