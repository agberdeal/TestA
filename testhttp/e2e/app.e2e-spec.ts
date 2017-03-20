import { TesthttpPage } from './app.po';

describe('testhttp App', function() {
  let page: TesthttpPage;

  beforeEach(() => {
    page = new TesthttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
