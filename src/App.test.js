import { render, screen } from '@testing-library/react';
import App from './App';

test('renders phone number link', () => {
  render(<App />);
  const linkElement = screen.getByText(/(614) 340-3373/i);
  expect(linkElement).toBeInTheDocument();
});
