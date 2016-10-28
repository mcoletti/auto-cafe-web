import { AutoCafeWebPage } from './app.po';

describe('auto-cafe-web App', function() {
  let page: AutoCafeWebPage;

  beforeEach(() => {
    page = new AutoCafeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
