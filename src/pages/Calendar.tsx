import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const locales = {
  'en-US': 'date-fns/locale/en-US',
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarView: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const events = tasks.map(task => ({
    title: task.title,
    start: new Date(task.dueDate),
    end: new Date(task.dueDate),
    allDay: true,
  }));
  
  return (
    <div className="md:w-[50%] mx-auto p-4 bg-white shadow-md rounded-lg">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        className="react-big-calendar"
      />
    </div>
  );
};

export default CalendarView;
