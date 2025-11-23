import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hi, I'm Kyle Arahan/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  // Use getByRole to specifically target navigation links
  const aboutLink = sc.getByRole('link', { name: /About/i });
  const workLink = screen.getByRole('link', { name: /^Work$/i });
  const skillsLink = screen.getByRole('link', { name: /Skills/i });
  expect(aboutLink).toBeInTheDocument();
  expect(workLink).toBeInTheDocument();
  expect(skillsLink).toBeInTheDocument();
});

test('renders work section', () => {
  render(<App />);
  const workSection = screen.getByText(/My Work/i);
  expect(workSection).toBeInTheDocument();
});

test('renders developer subtitle', () => {
  render(<App />);
  const subtitle = screen.getByText(/Full-Stack Developer & Student/i);
  expect(subtitle).toBeInTheDocument();
});
