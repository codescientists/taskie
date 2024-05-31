import React from 'react';
import { useParams } from 'react-router-dom';
import TaskDetail from '../components/TaskDetail';

const TaskPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <TaskDetail taskId={id} />
    </div>
  );
};

export default TaskPage;
