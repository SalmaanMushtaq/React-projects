import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTask] = useState([]);
  function handleAddTask(task) {
    console.log(task);
    setTask([...tasks, task]);
    // setIsOpen(false);
  }

  function handleAddToggle() {
    setIsOpen((open) => !open);
  }
  function handleToggle(id) {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function handleDelete(id) {
    setTask((tasks) => tasks.filter((task) => task.id !== id));
  }
  return (
    <div className="container">
      <header>
        <h1>To-DO-List📃</h1>
        <button onClick={handleAddToggle} className={isOpen ? "btnClose" : ""}>
          {isOpen ? "❌" : "➕"}
        </button>
      </header>
      <div style={{ marginTop: "10px" }}>
        <AddTaskForm isOpen={isOpen} onAddTask={handleAddTask} />
      </div>
      <div style={{ marginTop: "10px", padding: "10px" }}>
        <TaskList
          tasks={tasks}
          onDeleteTask={handleDelete}
          onDoubeClick={handleToggle}
        />
      </div>
    </div>
  );
};

export default MainPage;
