import '../App.css'
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { logout } from '../redux/userSlice';
import { CiCalendar, CiCircleList, CiCirclePlus, CiLogout, CiViewBoard } from "react-icons/ci";
import Modal from 'react-modal';
import TaskForm from './TaskForm';


const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
    <header className="text-gray-400 px-10 border-b">
      <div className="container mx-auto flex flex-wrap py-4 flex-col md:flex-row items-center justify-between">
        <Link to="/" className="flex font-bold items-center text-black text-2xl mb-4 md:mb-0">
          Taskie<span className="text-blue-600">.</span>
        </Link>

        {isAuthenticated ? (
          <div className='flex'>
            <button onClick={() => setIsOpen(true)} className="flex items-center border border-black border-dashed text-black px-2 py-1 mx-2 rounded text-md font-semibold">
              <CiCirclePlus className='mr-2 text-xl'/> Add New Task
            </button>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="New Task"
              className="Modal"
              overlayClassName="Overlay"
              >
              <h2>Add New Task</h2>
              <button onClick={closeModal} className="closeBtn">X</button>

              <TaskForm closeModal={closeModal} />
            </Modal>

            <button className="bg-red-700 text-white px-4 py-2 mx-2 rounded flex items-center" onClick={handleLogout}>
              Logout <CiLogout className="ml-2"/>
            </button>
          </div>
        ) : (
          <div>            
            <Link className="bg-blue-600 text-white px-4 py-2 mx-2 rounded text-md font-semibold" to="/login">Login</Link>
          </div>
        )}
      </div>
    </header>
    { isAuthenticated &&
      <nav className="flex items-center justify-center">
        <div className="flex items-center justify-between my-5 w-fit bg-gray-100 py-1 rounded-full">
          <NavLink 
            to="/" 
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "flex items-center justify-center mx-2 h-full px-3 py-1 rounded-full w-28 transition duration-300 shadow-md bg-white" : 
            "flex items-center justify-center mx-2 h-full hover:shadow-md hover:bg-white px-3 py-1 rounded-full w-28 transition duration-300"
            }>
            <CiCircleList className="mr-2" />
            List
          </NavLink>
          <NavLink to="/board" 
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "flex items-center justify-center mx-2 h-full px-3 py-1 rounded-full w-28 transition duration-300 shadow-md bg-white" : "flex items-center justify-center mx-2 h-full hover:shadow-md hover:bg-white px-3 py-1 rounded-full w-24 transition duration-300"}>

            <CiViewBoard className="mr-2" />
            Board
          </NavLink>
          <NavLink to="/calendar" className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "flex items-center justify-center mx-2 h-full px-3 py-1 rounded-full w-28 transition duration-300 shadow-md bg-white" : 
            "flex items-center justify-center mx-2 h-full hover:shadow-md hover:bg-white px-3 py-1 rounded-full w-28 transition duration-300"}>

            <CiCalendar className="mr-2" />
            Calendar
          </NavLink>
        </div>
      </nav>
    }
    </>
  );
};

export default Header;
