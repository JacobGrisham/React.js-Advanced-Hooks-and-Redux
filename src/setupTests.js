// As of 5/30/2021, enzyme does not have an officially compatible adapter. Refer to GitHub issue here: https://github.com/enzymejs/enzyme/issues/2429. Therefore, using unofficial adapter (https://github.com/wojtekmaj/enzyme-adapter-react-17) until the official one is released.

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom'

Enzyme.configure({ adapter: new Adapter() });