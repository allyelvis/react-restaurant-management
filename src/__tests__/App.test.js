import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders AI-Assisted Restaurant Management', () => {
  render(<App />);
  const linkElement = screen.getByText(/AI-Assisted Restaurant Management/i);
  expect(linkElement).toBeInTheDocument();
});
