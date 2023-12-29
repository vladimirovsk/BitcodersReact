import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter} from 'react-router-dom';

test('renders learn react link', () => {
  render(
      <Provider store ={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  );
  const linkElement = screen.getByText(/Github Search/i);
  expect(linkElement).toBeInTheDocument();
});
