import { ShootFirstPage } from './app.po';

describe('shoot-first App', () => {
  let page: ShootFirstPage;

  beforeEach(() => {
    page = new ShootFirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
