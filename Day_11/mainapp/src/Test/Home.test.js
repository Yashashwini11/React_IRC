import { render, screen } from '@testing-library/react';
import Home from '../Pages/Home';

test('Home renders SKCT and COIMBATORE', () => {
  render(<Home />);
  const collegeElement = screen.getByText(/SKCT/i);
  expect(collegeElement).toBeInTheDocument();
});
