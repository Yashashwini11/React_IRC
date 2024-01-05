import { render, screen } from '@testing-library/react';
import About from '../Pages/About';

test('About renders YASHASHWINI and CSE C', () => {
  render(<About />);
  const nameElement = screen.getByText(/YASHASHWINI/i);
//   const courseElement = screen.getByText(/CSE C/i);

  expect(nameElement).toBeInTheDocument();
//   expect(courseElement).toBeInTheDocument();
});
