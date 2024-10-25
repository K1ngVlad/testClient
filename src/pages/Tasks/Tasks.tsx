import { observable } from 'mobx';
import { FC, useEffect } from 'react';
import { taskStore } from '../../store';
import { TaskItem } from '../../components';
import { observer } from 'mobx-react-lite';

const Tasks: FC = observer(() => {
  useEffect(() => {
    taskStore.fetchTasks();
  });

  return (
    <main>
      {taskStore.tasks.map((task, i) => (
        <TaskItem key={i} />
      ))}
      Задачи
    </main>
  );
});

export { Tasks };
