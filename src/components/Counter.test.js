import React from 'react';
import {shallow, mount} from 'enzyme';

import Counter from './Counter';

describe('Counter', () => {
  let component;
  const getInputValue = () => component.find('input[type="text"]').first().props().value
  const setInputValue = (val) => { component.setState({count: val}) }

  beforeEach(() => {
    component = shallow(<Counter />);
  });

  it('should render one input', () => {
    const inputs = component.find('input[type="text"]');
    expect(inputs.length).toBe(1);
  });

  it('should render one .increment button', () => {
    const buttons = component.find('button.increment');
    expect(buttons.length).toBe(1);
  });

  it('should render one .decrment button', () => {
    const buttons = component.find('button.decrement');
    expect(buttons.length).toBe(1);
  });

  it('should have it\'s own count state', () => {
    expect(component.state()).not.toBeNull();
    expect(component.state('count')).toBeDefined();
  })

  describe('The input', () => {
    let input;

    beforeEach(() => {
      input = component.find('input[type="text"]').first();
    });

    it('should be readOnly', () => {
      expect(input.props().readOnly).toBeTruthy();
    });

    it('displays count from state', () => {
      expect(input.props().value).toBe(component.state('count'));
    })
  });

  describe('An .increment button', () => {
    let button;

    beforeEach(() => {
      component = mount(<Counter />);
      button = component.find('button.increment').first();
    });

    it('contains +', () => {
      expect(button.text()).toContain('+');
    });

    it('incrments the input value by 1 when clicked', () => {
      const before = getInputValue();

      button.simulate('click');
      component.update();

      expect(getInputValue()).toBe(before + 1);
    });
  });

  describe('A .decrement button', () => {
    let button;

    beforeEach(() => {
      component = mount(<Counter />);
      button = component.find('button.decrement').first();
    });

    it('contains -', () => {
      expect(button.text()).toContain('-');
    });

    it('decrements the input value by 1 when clicked', () => {
      // Incrment in case the count is 0
      setInputValue(4);

      const before = getInputValue();

      button.simulate('click');
      component.update();

      expect(getInputValue()).toBe(before - 1);
    });

    it('cannot decrement input value below 0', () => {
      setInputValue(0);

      button.simulate('click');
      component.update();

      expect(getInputValue()).toBe(0);
    });
  });

})
