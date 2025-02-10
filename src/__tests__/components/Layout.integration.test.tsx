import { render, screen } from '@testing-library/react';
import { Layout } from '@/components/Layout';

describe('Layout Component', () => {

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
  
    test('Should render footer with text with current year and developer name', () => {
      render(
        <Layout>
          <p>Any content</p>
        </Layout>
      );

      const currentYear = new Date().getFullYear();
      expect(screen.getByText(`© ${currentYear} ${process.env.NAME_DEVELOP}. All rights reserved.`)).toBeInTheDocument();
    });
});
