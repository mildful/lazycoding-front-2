import { LazycodingFrontPage } from './app.po';

describe('lazycoding-front App', () => {
  let page: LazycodingFrontPage;

  beforeEach(() => {
    page = new LazycodingFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
