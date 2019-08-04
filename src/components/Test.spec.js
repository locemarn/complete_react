import React from 'react'
import TestRenderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Test from './Test'


describe('<Text />', () => {

  test('should return Test component', () => {
    const wrapper = shallow(<Test />)
    expect(wrapper.find('p')).toBeTruthy()
  })

  describe('text', () => {
    test('should have p tag when text passed', () => {
      const wrapper = shallow(<Test text='test' />)
      expect(wrapper.text()).toEqual('test')
      expect(wrapper.find('p').props().children).toEqual('test')
    })

    test('should have p tag when text not passed', () => {
      const wrapper = shallow(<Test />)
      expect(wrapper.text()).toEqual('no text')
    })

  })

})


Enzyme.configure({ adapter: new Adapter() });
