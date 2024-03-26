/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTaskForm = ({ isOpen, onAddTask }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date_time: "",
    isCompleted: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const newValue = name === "isCompleted" ? true : value;
    const id = crypto.randomUUID();

    setFormData({
      ...formData,
      [name]: newValue,
      id: id,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name) return alert("Enter The Task Name");
    if (!formData.description) return alert("Enter Description");
    onAddTask(formData);
    setFormData({
      name: "",
      description: "",
      date_time: "",
      isCompleted: false,
    });
  }
  return (
    <>
      {isOpen && (
        <form className="add-task-form" onSubmit={handleSubmit}>
          <label>Task Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <label>Date & Time</label>
          <input
            type="text"
            name="date_time"
            value={formData.date_time}
            onChange={handleChange}
          />
          <label>Completed</label>
          <input
            type="checkbox"
            name="isCompleted"
            checked={formData.isCompleted}
            onChange={handleChange}
          />
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              gridColumn: "2/-1",
            }}
          >
            Add Task
          </button>
        </form>
      )}
    </>
  );
};

export default AddTaskForm;
