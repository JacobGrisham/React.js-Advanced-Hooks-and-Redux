import { shallow} from 'enzyme';
import Scroll from '../components/Scroll'

describe('<Scroll />', () => {
  it('should match snapshot', () => {
    expect.assertions(1);
    expect(shallow(<Scroll />)).toMatchSnapshot();
  })
});