import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

export interface ITaskSortData {
  sortBy?: string;
  sortType?: "asc" | "desc";
}


export const TaskContext = createContext<any>({});

export const TaskProvider: FC<PropsWithChildren> = ({ children }) => {
    const [sortData, setSortData] = useState<ITaskSortData>({});

    return (
        <TaskContext.Provider value={{ sortData, setSortData}}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => useContext(TaskContext);