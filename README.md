## Taskie - Task Management App

**Table of Contents**
- Introduction
- Features
- Tech Stack
- Setup Instructions
- Design Decisions
- Additional Features
- Usage
- Screenshots

### Introduction
The Task Management App is a simple react application for managing tasks. It allows users to create, view, and manage their tasks. The app includes user authentication to ensure that tasks are user-specific. Users can view their tasks in various views.

### Features
- **Task List:** Display tasks with titles, due dates and statuses (To Do, In Progress, Done).

- **Task Creation:** Create new tasks with a title, description, priority, and due date.

- **Task Filtering:** Filter tasks based on their status.

- **Task Detail View:** View detailed information about a task.

- **User Authentication:** Register, log in, and log out users.

- **Task Completion:** Mark tasks as complete.

- **Board View:** A Kanban Board to drag and drop tasks.

- **Calendar View:** A Canlendar view to view tasks according to thier due date.

- **Responsive Design:** Works on mobile devices.



### Tech Stack
- **Frontend:** React, TypeScript, TailwindCSS, Vite.
- **State Management:** React Redux.
- **Routing:** React Router Dom
- **Local Storage:**  Browser's localStorage
- **Toast:**  React Hot Toast
- **Icons:**  React Icons



### Setup Instructions

#### Clone the repository:
```
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
```

#### Install dependencies:

```
npm install
```

#### Run the app:
```
npm start
```

#### Build the app for production:

```
npm run build
```

### Design Decisions
- **React with TypeScript:** Chosen for its type safety, which helps in catching errors during development and improving code quality.

- **React Redux:** Used for state management to provide a simple and clean solution for sharing state across components.

- **Local Storage:** Selected for its simplicity in storing user data and tasks persistently on the client-side without needing a backend server.

- **Functional Components and Hooks:** Used for cleaner and more modern React code, making use of hooks for state and side effects management.

- **React Router Dom:** Implemented for handling routing within the application, providing a smooth navigation experience.


### Additional Features

- **Priority Levels:** Allows users to categorize tasks based on urgency (Low, Medium, High).

- **Due Dates:** Users can set due dates for tasks, helping in time management.

- **Responsive Design:** The app is designed to be usable on mobile devices.

### Usage

- **Register:** Navigate to the registration page (/register) and create a new account.
- **Login:** Navigate to the login page (/login) and log in with your credentials.
- **Create a Task:** Click on the button located on the header, modal will open with task's form.

- **View Tasks List:** Go to the task list page (/) to see your tasks.

- **View Tasks on Board:** Go to the board page (/board) to see your tasks on board.

- **View Tasks on Calendar:** Go to the calendar page (/calendar) to see your tasks on calendar.

- **Mark Tasks as Complete:** Click the checkbox button to toggle the status of a task between "To Do" and "Done".

- **Logout:** Click the logout button to end your session.

## Screenshots

### Task List
![Task List](https://github.com/codescientists/taskie/assets/66505013/0aee0c6d-f7b2-4cdd-b6f5-317aefe3a32d)

### Task Board
![image](https://github.com/codescientists/taskie/assets/66505013/f1d7b920-2c58-4a62-8b00-d8e653261bc8)

### Task Calendar
![image](https://github.com/codescientists/taskie/assets/66505013/47555224-4246-489d-a8ed-0fe676aac8bc)

### Task Form Modal
![image](https://github.com/codescientists/taskie/assets/66505013/18c54a81-52f5-48ff-8d63-e283951c9338)
