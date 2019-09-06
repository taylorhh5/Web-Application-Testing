import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
// import 'jest-dom/extend-expect';
import Dashboard, {hit, ball, setBall, strike, setStrike} from './Dashboard.js'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});





test('contains foul', () => {
  // Arrange
  const { getByText } = render(<Dashboard />);
  // Act - getting the node by text
  getByText(/Foul/i);
  // Assertion is if ^^^ is truthy
});

test('contains strike', () => {
  // Arrange
  const { getByText } = render(<Dashboard />);
  // Act - getting the node by text
  getByText(/strike/i);
  // Assertion is if ^^^ is truthy
});

test('contains ball', () => {
  // Arrange
  const { getByText } = render(<Dashboard />);
  // Act - getting the node by text
  getByText(/ball/i);
  // Assertion is if ^^^ is truthy
});


test('hit button clears ball count', () => {
  if (ball) expect (hit()).toBe(9);
});


test('hit button clears ball count', () => {
  if (strike===2) expect (setStrike(1)).toBe(0);
});
