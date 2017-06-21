import { CrudBikesPage } from './app.po';

describe('crud-bikes App', () => {
  let page: CrudBikesPage;

  beforeEach(() => {
    page = new CrudBikesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
