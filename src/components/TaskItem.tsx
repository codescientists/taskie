import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTaskStatus, deleteTask } from '../redux/tasksSlice';
import { CiClock1, CiTrash } from 'react-icons/ci';
import { Link } from 'react-router-dom';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    description: string;
    status: string;
    dueDate: string;
    priority: string;
  };
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleStatusChange = () => {
    if (task.status === 'Done') {
      dispatch(updateTaskStatus({ id: task.id, status: 'To Do' }));
    } else {
      dispatch(updateTaskStatus({ id: task.id, status: 'Done' }));
    }
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="flex items-center space-x-4 p-4">
      <input
        type="checkbox"
        checked={task.status === 'Done'}
        onChange={handleStatusChange}
        className="form-checkbox h-5 w-5 text-green-600"
      />
      <div className="flex-1">
        <Link to={`/task/${task.id}`} className={`${task.status === 'Done' ? 'line-through text-gray-500' : 'text-black'}`}>
          {task.title}
        </Link>
        <p className="flex items-center text-sm text-gray-500"><CiClock1 className='mr-1' /> {task.dueDate}</p>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-600 hover:text-red-800 transition-colors duration-300 text-xl"
      >
        <CiTrash />
      </button>
    </div>
  );
};

export default TaskItem;
