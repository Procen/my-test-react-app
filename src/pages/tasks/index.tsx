import { FC, useEffect, useState } from "react";
import Card from "src/components/Task/Card";
import SortingContainer from "src/components/Task/SortingContainer";
import AppLayout from "src/components/AppLayout";
import { getAll } from "src/services/tasks"
import "src/styles/tasks.css";
import { useTaskContext } from "src/utils/context/task";
import { TASK_SORTING_DATA } from "src/utils/constants"
import { sortByString, sortByNumber, sortByDate } from "src/utils/sorting";
import { get } from "lodash";
import cn from "classnames";

const Tasks: FC = () => {

  const [tasks, setTasks] = useState<Tasks.ListItem[]>([]);
  const [displaySorting, toggleSortingDisplay] = useState(false);
  const { sortData } = useTaskContext();
  const { sortBy, sortType } = sortData;


  const loadData = async () => {
    const items = await getAll();
    setTasks(items);
  }

  useEffect(() => {
    loadData()
  }, [])



  const sortingTask = () => {
    if(!sortBy || !sortType) return tasks;

    const sortElement = TASK_SORTING_DATA.find((i) => i.key === sortBy)

    switch(sortElement?.fieldType) {
      case "string":
        return [...tasks].sort((a, b) => sortByString(get(a, sortBy), get(b, sortBy), sortType));
      case "number":
        return [...tasks].sort((a, b) => sortByNumber(get(a, sortBy), get(b, sortBy), sortType));
      case "date":
        return [...tasks].sort((a, b) => sortByDate(get(a, sortBy), get(b, sortBy), sortType));
      default:
        return tasks;
    }
  }

  const sortedTask = sortingTask();

  return (
    <AppLayout>
      <div className="task-container">
        <div className="tasks-header">
          <h2>Tasks ({sortedTask.length})</h2>
          <button className={cn("toggle-sorting", { "active": sortBy && sortType })} onClick={() => toggleSortingDisplay(!displaySorting)}>
            <span>Sorting</span>
          </button>
        </div>
        {displaySorting && <SortingContainer />}
        <div className="task-list">
          {sortedTask.map((t) => <div key={`task-${t.id}`} className="task-item"><Card task={t} /></div>)}
        </div>
      </div>
    </AppLayout>
  );
};

export default Tasks;
