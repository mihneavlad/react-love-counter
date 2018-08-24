import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Counter from './components/Counter';

describe('App', () => {
  let component = shallow(<App />);

  it('renders a .container wrapper', () => {
    const containerElems = component.find('.container');

    expect(containerElems.length).toBeGreaterThan(0);
  });

  describe('The .container wrapper', () => {
    const containerElem = component.find('.container').first();

    it('contains all other elements', () => {
      expect(containerElem.children()).toEqual(component.children())
    });

    it('renders a h1 element', () => {
      const headings = containerElem.find('h1');
      expect(headings.length).toBe(1);
      expect(headings.first().text().toLowerCase()).toContain('counter');
    });

    it('renders a Counter component', () => {
      const counters = containerElem.find(Counter);

      expect(counters.length).toBe(1);
    });
  });
});
