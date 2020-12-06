import { helloTemplatePage } from './app.po';

describe('hello App', function() {
  let page: helloTemplatePage;

  beforeEach(() => {
    page = new helloTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
