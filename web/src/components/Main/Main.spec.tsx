import { render, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import handleSortFilter from '../../utils/handleSort';

import Main from '.';

jest.mock('../../utils/handleSort');

describe('Header Component', () => {
  it('should have a input with the right placeholder', () => {
    const { getByPlaceholderText } = render(<Main />);

    expect(
      getByPlaceholderText('Adicionar uma nova tarefa...'),
    ).toBeInTheDocument();
  });

  it('should be able to create a new task', async () => {
    const { getByPlaceholderText, getByText, debug } = render(<Main />);
    const inputAddTask = getByPlaceholderText('Adicionar uma nova tarefa...');

    await act(async () => userEvent.type(inputAddTask, 'new task{enter}'));

    await waitFor(() => {
      expect(getByText('new task')).toBeInTheDocument();
    });
  });

  it('should call the sort function when click on the filter buttons', () => {
    (handleSortFilter as jest.Mock).mockReturnValue([]);

    const { getByText } = render(<Main />);
    const button = getByText('Ordem alfabética');

    fireEvent.click(button);

    expect(handleSortFilter).toHaveBeenCalled();
    expect(jest.isMockFunction(handleSortFilter)).toBeTruthy();
  });
});
