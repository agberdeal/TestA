import { DebugTest1Page } from './app.po';

describe('debug-test1 App', function() {
  let page: DebugTest1Page;

  beforeEach(() => {
    page = new DebugTest1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
