import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface TaskDetailProps {
  taskId: string;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ taskId }) => {
  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((task) => task.id === taskId)
  );

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold">{task.title}</h1>
      <p className="text-lg ">{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.dueDate}</p>
    </div>
  );
};

export default TaskDetail;
