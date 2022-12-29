import { render, screen } from '@testing-library/react';
import { Greet } from '../components';

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

// it => alternate alias for test
// Describe => group tests
describe('Greet 2', () => {
  // it => alias for test

  // skip => skip this test
  xit('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  // Nested describe
  describe('Nested 2', () => {
    // only => run only this test
    fit('renders with a name', () => {
      render(<Greet name='Zoms' />);
      const textElement = screen.getByText('Hello Zoms');
      expect(textElement).toBeInTheDocument();
    });
  });
});
