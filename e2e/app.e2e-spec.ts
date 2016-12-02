import { BritishPage } from './app.po';

describe('british App', function() {
  let page: BritishPage;

  beforeEach(() => {
    page = new BritishPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
