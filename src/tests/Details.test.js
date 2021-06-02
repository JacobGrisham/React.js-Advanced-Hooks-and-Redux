import { shallow} from 'enzyme';
import Details from '../components/Details'

describe('<Details />', () => {
  it('should match snapshot', () => {
    expect.assertions(1);
    expect(shallow(<Details />)).toMatchSnapshot();
  })
});