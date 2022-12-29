import { render, screen } from '@testing-library/react';
import Greet from '.';

// Describe => group tests
describe('Greet', () => {
  // skip => skip this test
  test.skip('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  // Nested describe
  describe('Nested', () => {
    // only => run only this test
    test.only('renders with a name', () => {
      render(<Greet name='Zoms' />);
      const textElement = screen.getByText('Hello Zoms');
      expect(textElement).toBeInTheDocument();
    });
  });
});
