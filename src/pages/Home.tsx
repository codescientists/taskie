import React from 'react';
import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Home: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  return (
    <div className="w-full md:w-[30%] border flex items-center flex-col justify-center mx-auto">
      {
        isAuthenticated ?
        <TaskList />
        :
        <p>Please <Link to="/login" className='text-blue-500'>Login</Link> to add or view task</p>
      }
    </div>
  );
};

export default Home;
