const Task = ({ task, onDeleteTask, onDoubeClick }) => {
  return (
    <li
      className={task.isCompleted ? "completed" : ""}
      onDoubleClick={() => onDoubeClick(task.id)}
    >
      <h3>{task.name?.toUpperCase()}</h3>
      <span
        style={{ textAlign: "end", cursor: "pointer" }}
        onClick={() => onDeleteTask(task.id)}
      >
        ❌
      </span>
      <div>
        <p>{task.description}</p>
        <p>{task.date_time}</p>
      </div>
    </li>
  );
};

export default Task;
