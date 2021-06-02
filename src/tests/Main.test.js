import * as React from 'react'
// Enzyme
import { shallow} from 'enzyme';
// React Testing Library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Main from '../components/Main';

describe('<Main />', () => {
  let wrapper;

  beforeEach(() => {
    const mockPropsEmpty = {
      onRequestOfUsers: jest.fn(),
      users: [],
      searchfield: '',
      isPending: false
    }
    wrapper = shallow(<Main {...mockPropsEmpty} />);
  });

  it('should match snapshot', () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });

  // This test is incomplete. Not sure how to mock the onRequestOfUsers() function.
  // Need to mock user data so that searchbox can compare its value to that data.
  // test('should filter robots correctly given a matching input', () => {
  //   render(<Main />)
  //   const searchbox = screen.getByLabelText('searchbox')
  //   expect(searchbox).toHaveValue('')
  //   userEvent.type(searchbox, 'john')
  //   expect(searchbox).toHaveValue('john')
  // });

});

