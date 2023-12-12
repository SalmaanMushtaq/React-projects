import { useState } from "react";
const Form = ({ onAddItems }) => {
  const [formData, setFormData] = useState({
    description: "",
    quantity: 1,
    packed: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.description.trim() === "") {
      alert("Please enter a description before submitting.");
      return;
    }
    onAddItems(formData);
    setFormData({ description: "", quantity: 1, packed: false });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    const newValue = name === "quantity" ? Number(value) : value;
    setFormData({ ...formData, [name]: newValue, id: Date.now() });
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={formData.quantity} onChange={handleChange} name="quantity">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
