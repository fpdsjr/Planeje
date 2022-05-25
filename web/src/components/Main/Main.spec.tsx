import { render, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import handleSortFilter from '../../utils/handleSort';
import fetchApi from '../../utils/fetchApi';

import Main from '.';

jest.mock('../../utils/handleSort');
jest.mock('../../utils/fetchApi');

describe('Header Component', () => {
  it('should have a input with the right placeholder', () => {
    (fetchApi as jest.Mock).mockReturnValue([
      {
        id: '69218be1-548b-4929-a8db-c338438a6ee3',
        description: 'Aprender',
        status: 'PENDING',
        created_at: '2022-05-24T04:13:58.935Z',
      },
    ]);

    const { getByPlaceholderText } = render(<Main />);

    expect(
      getByPlaceholderText('Adicionar uma nova tarefa...'),
    ).toBeInTheDocument();
  });

  it('should be able to create a new task', async () => {
    (fetchApi as jest.Mock).mockReturnValue([
      {
        id: '69218be1-548b-4929-a8db-c338438a6ee3',
        description: 'Aprender',
        status: 'PENDING',
        created_at: '2022-05-24T04:13:58.935Z',
      },
    ]);

    render(<Main />);

    expect(fetchApi).toHaveBeenCalled();
    expect;
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
