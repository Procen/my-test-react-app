import { FC } from "react";
import Card from "src/modules/Card";
import Space from "src/modules/Space";
import { ColorTag } from "src/modules/Tag";
import { EllipsisText } from "src/modules/Text";
import { formatText } from "src/utils/textFormat";
import { DEFAULT_TAG_COLOR } from "src/utils/constants";
import PriorityTag from "src/components/Task/PriorityTag";

interface ICardProps {
  task: Tasks.ListItem;
}

const TaskCard: FC<ICardProps> = ({ task }) => {

  const getTitle = () => (
    <Space size={2}>
      <ColorTag className="task-id fs-13" borderColor={DEFAULT_TAG_COLOR} textColor="black">{task.id}</ColorTag>
      <EllipsisText className="task-title">{task.title}</EllipsisText>
    </Space>
  )

  const getExtra = () => (
    <Space className="task-extra" size={2}>
      <PriorityTag priority={task.priority} />
      <span>Due: {formatText(task.dueDate)}</span>
    </Space>
  )

  const getFooter = () => (
    <div className="task-footer">
      <div>Created At: {task.createdAt}</div>
      <div>Points: {task.storyPoints}</div>
    </div>
  )

  return (
    <Card
      title={getTitle()}
      extra={getExtra()}
      footer={getFooter()}
    >
      <div>{formatText(task.description)}</div>
    </Card>
  );
};

export default TaskCard;
