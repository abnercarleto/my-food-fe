import { MyFoodFePage } from './app.po';

describe('my-food-fe App', () => {
  let page: MyFoodFePage;

  beforeEach(() => {
    page = new MyFoodFePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
