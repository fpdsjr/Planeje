import { fireEvent, render } from '@testing-library/react';
import Task from '.';
import fetchApi from '../../utils/fetchApi';

jest.mock('../../utils/fetchApi');

const deleteTask = jest.fn();
const setIsHavingATaskEvent = jest.fn();

describe('Task description', () => {
  it('should change the status', () => {
    const { getByTestId } = render(
      <Task
        id="123456"
        description="new task add"
        status="PENDING"
        deleteTask={deleteTask}
        setIsHavingATaskEvent={setIsHavingATaskEvent}
        isHavingATaskEvent={true}
      />,
    );

    (fetchApi as jest.Mock).mockReturnValue('OK');

    const select = getByTestId('select-option');

    fireEvent.change(select, {
      target: { value: 'DONE' },
    });

    expect(fetchApi).toHaveBeenCalled();
  });

  it('should change the status', () => {
    const { getByTestId } = render(
      <Task
        id="123456"
        description="new task add"
        status="PENDING"
        deleteTask={deleteTask}
        setIsHavingATaskEvent={setIsHavingATaskEvent}
        isHavingATaskEvent={true}
      />,
    );

    (fetchApi as jest.Mock).mockReturnValue('OK');

    const select = getByTestId('select-option');

    fireEvent.change(select, {
      target: { value: 'DONE' },
    });

    expect(fetchApi).toHaveBeenCalled();
  });

  it('should update a test update a task', () => {
    const { getByText } = render(
      <Task
        id="123456"
        description="new task add"
        status="PENDING"
        deleteTask={deleteTask}
        setIsHavingATaskEvent={setIsHavingATaskEvent}
        isHavingATaskEvent={true}
      />,
    );

    (fetchApi as jest.Mock).mockReturnValue('OK');

    const select = getByText('Atualizar');

    fireEvent.click(select);

    expect(fetchApi).toHaveBeenCalled();
  });

  it('should delete a task', () => {
    const deleteTask = jest.fn();

    const { getByTestId } = render(
      <Task
        id="123456"
        description="new task add"
        status="PENDING"
        deleteTask={deleteTask}
        setIsHavingATaskEvent={setIsHavingATaskEvent}
        isHavingATaskEvent={true}
      />,
    );

    (fetchApi as jest.Mock).mockReturnValue('OK');

    const select = getByTestId('delete-task');

    fireEvent.click(select);

    expect(deleteTask).toHaveBeenCalled();
  });
});
