import React from 'react'
import DashBoardPage from '../../components/DashBoardPage'
import { shallow } from 'enzyme'
// react-test-renderer

test('should render DashBoardPage correctly', () => {
  const wrapper = shallow(<DashBoardPage />)
  expect(wrapper).toMatchSnapshot()
})
