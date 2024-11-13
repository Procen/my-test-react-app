import { FC } from "react";
import { useTaskContext } from "src/utils/context/task";
import { TASK_SORTING_DATA } from "src/utils/constants";
import { Space } from "src/modules/Space";
import { SortingButton } from "src/modules/Button";


const SortingContainer: FC = () => {
  const { sortData, setSortData } = useTaskContext()

  const { sortBy, sortType} = sortData;

  const handleClick = (sortBy: string, sortType: Common.Sorting) => {
    setSortData((prev: any ) => ({...prev, sortBy, sortType}))
  }

  return (
    <div className="sorting-container">
      <Space size={10}>
        { TASK_SORTING_DATA.map(({key, fieldName}) => (
          <div key={`sorting-${key}`} className="py-5">
            <SortingButton
              value={key}
              active={key === sortBy && sortType}
              onClick={handleClick}
              sorting={sortType}
            >
              {fieldName}
            </SortingButton>
          </div>)
        )}
      </Space>
    </div>
  );
};

export default SortingContainer;
