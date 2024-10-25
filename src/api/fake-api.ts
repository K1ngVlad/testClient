import { TaskPriority, TaskResolution, Tasks, TaskStatus } from '../types';

class FakeApi {
  delay = 1000;

  tasks: Tasks = [
    {
      id: 1,
      name: 'Hello',
      deadline: '3213213',
      description: 'dsdasdsadsadasdsad',
    },
    {
      id: 2,
      name: 'of course',
      status: TaskStatus.COMPLETED,
      priority: TaskPriority.HIGH,
    },
    {
      id: 3,
      area: 'Самарра',
      sprintName: 'Спринт',
    },
    {
      id: 4,
      resolution: TaskResolution.DUBLICATE,
      responsible: 'Владислав',
    },
  ];

  getAllTasks(): Promise<Tasks> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.tasks);
      }, this.delay);
    });
  }
}

const fakeApi = new FakeApi();

export { fakeApi };
