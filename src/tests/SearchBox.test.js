import { shallow} from 'enzyme';
import SearchBox from '../components/SearchBox'

describe('<SearchBox />', () => {
  it('should match snapshot', () => {
    expect.assertions(1);
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  })
});