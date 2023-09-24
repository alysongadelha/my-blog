import { Author } from '@/components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mockAuthor } from '@/__mocks__';
import { Author as IAuthor } from '@/interfaces';

describe('Authors', () => {
  console.error = jest.fn();

  it('should return the component', () => {
    render(<Author author={mockAuthor} />);

    const component = screen.getByTestId('author-component');

    expect(component).toBeInTheDocument();
  });

  it('should return a console error if the no props is passed', () => {
    render(<Author author={{} as IAuthor} />);

    expect(console.error).toHaveBeenCalled();
  });
});
