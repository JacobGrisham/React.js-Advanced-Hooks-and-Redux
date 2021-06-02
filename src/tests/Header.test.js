import { shallow} from 'enzyme';
import Header from '../components/Header'

describe('<Header />', () => {
  it('should match snapshot', () => {
    expect.assertions(1);
    expect(shallow(<Header />)).toMatchSnapshot();
  })
});