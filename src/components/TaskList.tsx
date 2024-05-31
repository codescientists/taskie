import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchTasks } from '../redux/tasksSlice';
import TaskItem from './TaskItem';

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(task => task.status === filter);

  return (
    <div className="w-full px-4 py-2">
      <button className={`mx-2 text-blue-500 font-semibold ${filter == 'All' ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => setFilter('All')}>All</button>
      <button className={`mx-2 font-semibold ${filter == 'To Do' ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => setFilter('To Do')}>To Do</button>
      <button className={`mx-2 font-semibold ${filter == 'In Progress' ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => setFilter('In Progress')}>In Progress</button>
      <button className={`mx-2 font-semibold ${filter == 'Done' ? 'text-blue-500' : 'text-gray-500'}`} onClick={() => setFilter('Done')}>Done</button>

      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
