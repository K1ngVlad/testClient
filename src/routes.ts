import { Dashboard, Export, Import, Root, Tasks } from './pages';
import {
  DASHBOARD_PATH,
  EXPORT_PATH,
  IMPORT_PATH,
  ROOT_PATH,
  TASKS_PATH,
} from './pathes';

const routes = [
  {
    path: ROOT_PATH,
    Component: Root,
  },
  {
    path: DASHBOARD_PATH,
    Component: Dashboard,
  },
  {
    path: IMPORT_PATH,
    Component: Import,
  },
  {
    path: EXPORT_PATH,
    Component: Export,
  },
  {
    path: TASKS_PATH,
    Component: Tasks,
  },
];

export { routes };
