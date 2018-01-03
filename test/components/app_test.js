// what is the behaviour about this component i want to test? 
// what do i care about someone not breaking? 

// what are we trying to test?? that the app renders the div with the text 

import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group tgether similar tests 
describe('App', () => {
  let component;
  
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist; 

  }); 
}); 
