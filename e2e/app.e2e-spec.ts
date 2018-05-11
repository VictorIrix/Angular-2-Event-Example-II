import { AngularObservablePage } from './app.po';

describe('angular-observable App', () => {
  let page: AngularObservablePage;

  beforeEach(() => {
    page = new AngularObservablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
