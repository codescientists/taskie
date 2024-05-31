import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from './store';

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  dueDate: string;
  priority: string;
}

interface TasksState {
  tasks: Task[];
  columns: Record<string, { title: string; items: Task[] }>;
}

const initialState: TasksState = {
  tasks: [],
  columns: {
    'To Do': { title: 'To Do', items: [] },
    'In Progress': { title: 'In Progress', items: [] },
    'Done': { title: 'Done', items: [] },
  },
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
      state.columns['To Do'].items = action.payload.filter(task => task.status === 'To Do');
      state.columns['In Progress'].items = action.payload.filter(task => task.status === 'In Progress');
      state.columns['Done'].items = action.payload.filter(task => task.status === 'Done');
    },
    addTask(state, action: PayloadAction<Omit<Task, 'id'>>) {
      const newTask = { ...action.payload, id: Date.now().toString() };
      state.tasks.push(newTask);
      state.columns['To Do'].items.push(newTask);
      saveTasksToLocalStorage(state.tasks);
    },
    updateTaskStatus(state, action: PayloadAction<{ id: string; status: string }>) {
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
        state.columns['To Do'].items = state.tasks.filter(task => task.status === 'To Do');
        state.columns['In Progress'].items = state.tasks.filter(task => task.status === 'In Progress');
        state.columns['Done'].items = state.tasks.filter(task => task.status === 'Done');
        saveTasksToLocalStorage(state.tasks);
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      state.columns['To Do'].items = state.tasks.filter(task => task.status === 'To Do');
      state.columns['In Progress'].items = state.tasks.filter(task => task.status === 'In Progress');
      state.columns['Done'].items = state.tasks.filter(task => task.status === 'Done');
      saveTasksToLocalStorage(state.tasks);
    }
  },
});

const saveTasksToLocalStorage = (tasks: Task[]) => {
  const email = localStorage.getItem('email');
  if (email) {
    const userData = JSON.parse(localStorage.getItem(email) || '{}');
    userData.tasks = tasks;
    localStorage.setItem(email, JSON.stringify(userData));
  }
};

export const { setTasks, addTask, updateTaskStatus, deleteTask } = tasksSlice.actions;

export const fetchTasks = () => (dispatch: AppDispatch) => {
  const email = localStorage.getItem('email');
  if (email) {
    const userData = localStorage.getItem(email);
    if (userData) {
      const user = JSON.parse(userData);
      dispatch(setTasks(user.tasks || []));
    }
  }
};

export default tasksSlice.reducer;
