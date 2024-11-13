import { createBrowserRouter } from 'react-router-dom';
import Tasks from '../pages/tasks';
import { TaskProvider } from "src/utils/context/task";

const router = createBrowserRouter([
  {
    path: '/',
    element: <TaskProvider><Tasks /></TaskProvider>,
  },
]);

export { router };