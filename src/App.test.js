
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the CI/CD pipeline heading', () => {
  render(<App />);

  const heading = screen.getByRole('heading', {
    name: /CI\/CD Pipeline/i,
  });

  expect(heading).toBeInTheDocument();
});
