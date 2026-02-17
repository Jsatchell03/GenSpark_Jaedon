import { useState } from "react";

const MAX_TASKS = 20;

function TaskForm({ onAdd, tasks }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Med");
  const [warning, setWarning] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    if (tasks.length >= MAX_TASKS) {
      setWarning(`Task limit reached (max ${MAX_TASKS}). Delete a task before adding more.`);
      return;
    }

    if (tasks.some((t) => t.title.toLowerCase() === trimmed.toLowerCase())) {
      setWarning(`A task titled "${trimmed}" already exists.`);
      return;
    }

    setWarning("");
    onAdd(trimmed, priority);
    setTitle("");
    setPriority("Med");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Med">Med</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
      {warning && <p className="form-warning">{warning}</p>}
    </form>
  );
}

export default TaskForm;
