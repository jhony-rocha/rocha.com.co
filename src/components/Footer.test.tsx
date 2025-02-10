import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Component', () => {
  let originalEnv: NodeJS.ProcessEnv;

  beforeAll(() => {
    originalEnv = { ...process.env };
  });

  beforeEach(() => {
    process.env.NAME_DEVELOP = 'Jhony Rocha';
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  test('Should render text with current year and developer name', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const expectedText = `© ${currentYear} ${process.env.NAME_DEVELOP}. All rights reserved.`;

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  test('Should contain a footer role', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
