import { render, screen } from '@testing-library/react';
import Footer from './Component/Footer';

describe('Footer', () => {
  test('renders the copyright text', () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2022 The New York Sun Company, LLC. All Rights Reserved./i)
    ).toBeInTheDocument();
  });
});
