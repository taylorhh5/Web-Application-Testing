import React from 'react';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Display from './Display.js'
import App from './App.js'
import { strike, setStrike, ball, setBall, fouls, setFoul } from './App.js'

test('Dashboard renders without crashing', () => {
    render(<App />);
});


// test('strike adds 1', () => {
//     if (strike === 1) expect(setStrike(0)).toBe(1);
// });