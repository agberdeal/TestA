import { MyDirectivesPage } from './app.po';

describe('my-directives App', function() {
  let page: MyDirectivesPage;

  beforeEach(() => {
    page = new MyDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
