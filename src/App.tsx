import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TaskPage from './pages/TaskPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Board from './pages/Board';
import CalendarView from './pages/Calendar';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task/:id" element={<TaskPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="/calendar" element={<CalendarView/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </>
  );
};

export default App;
