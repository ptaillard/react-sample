import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders Welcome title', () => {
  const app = shallow(<App />)
  const welcome = <h1 className="App-title">Welcome to React</h1>;
  expect(app.contains(welcome)).toEqual(true);
});
