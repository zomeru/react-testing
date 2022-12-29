import { render, screen } from '@testing-library/react';
import Greet from '.';

test('Greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

test('Greet renders with a name', () => {
  render(<Greet name='Zoms' />);
  const textElement = screen.getByText('Hello Zoms');
  expect(textElement).toBeInTheDocument();
});
