import { shallow} from 'enzyme';
import CardList from '../components/CardList'

describe('<CardList />', () => {
  it('should match snapshot', () => {
    expect.assertions(1);
    const mockRobots = [
      {
        id: 1,
        name: 'John',
        username: 'John123',
        email: 'john123@gmail.com'
      }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
  })
});