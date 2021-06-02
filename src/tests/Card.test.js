import * as React from 'react'
// Enzyme
import { shallow} from 'enzyme';
// React Testing Library
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from '../components/Card'

describe('<Card />', () => {
  it('should match snapshot', () => {
    expect.assertions(1);
    expect(shallow(<Card />)).toMatchSnapshot();
  });

  // Inspiration from https://kentcdodds.com/blog/react-hooks-whats-going-to-happen-to-my-tests
  test('favorite toggle button should turn red when user clicks on it', () => {
    expect.assertions(2);
    render(<Card />)
    const button = screen.getByLabelText('Favorite/Unfavorite')
    const iconBefore = screen.getByLabelText('Favorite Icon')
    expect(iconBefore).toHaveStyle({color: 'none'})
    userEvent.click(button)
    const iconAfter = screen.getByLabelText('Favorite Icon')
    expect(iconAfter).toHaveStyle({color: 'red'})
  });
  
  // This test fails, should be expect(iconAfter).toHaveStyle({color: 'none'})
  test('favorite toggle button should have no color when user clicks twice', () => {
    expect.assertions(2);
    render(<Card />)
    const button = screen.getByLabelText('Favorite/Unfavorite')
    const iconBefore = screen.getByLabelText('Favorite Icon')
    expect(iconBefore).toHaveStyle({color: 'none'})
    userEvent.dblClick(button)
    const iconAfter = screen.getByLabelText('Favorite Icon')
    expect(iconAfter).toHaveStyle({color: 'red'})
  });
  
});
