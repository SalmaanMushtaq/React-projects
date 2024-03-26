/* eslint-disable react/prop-types */
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onDoubeClick }) => {
  return (
    <>
      <h2>Your Task List 📖</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              task={task}
              key={task.id}
              onDeleteTask={onDeleteTask}
              onDoubeClick={onDoubeClick}
            />
          ))
        ) : (
          <li>NO TASK TO DISPLAY 🙂 .</li>
        )}
      </ul>
    </>
  );
};

export default TaskList;
