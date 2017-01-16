import { PQReporterWebPage } from './app.po';

describe('pqreporter-web App', function() {
  let page: PQReporterWebPage;

  beforeEach(() => {
    page = new PQReporterWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
