import { render } from '@testing-library/react';
import Header from '.';

describe('Header Component', () => {
  it('should be able to find text title', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Planeje')).toBeInTheDocument();
  });
});
