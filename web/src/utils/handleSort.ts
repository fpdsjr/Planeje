interface ITask {
  id: string;
  description: string;
  status: string;
  created_at: Date;
}

export default function handleSortFilter(allTasks: ITask[], sort: string) {
  if (sort === 'description') {
    const sortedByDescription = allTasks.sort((a: any, b: any) =>
      a.description.localeCompare(b.description),
    );

    return sortedByDescription;
  }

  if (sort === 'created_at') {
    const sortedByDescription = allTasks.sort((a: any, b: any) =>
      a.created_at.localeCompare(b.created_at),
    );

    return sortedByDescription;
  }

  if (sort === 'status') {
    const sortedByDescription = allTasks.sort((a: any, b: any) =>
      a.status.localeCompare(b.status),
    );

    return sortedByDescription;
  }
}
