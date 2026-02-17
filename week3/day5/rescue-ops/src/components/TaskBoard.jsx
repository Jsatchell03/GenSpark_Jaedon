import { useState } from "react";
import Column from "./Column";
import TaskForm from "./TaskForm";

const COLUMNS = ["To Do", "Doing", "Done"];

function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  function addTask(title, priority) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      status: "To Do",
      priority,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function moveTask(id, newStatus) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="task-board">
      <h1>Frontend Rescue Ops</h1>
      <TaskForm onAdd={addTask} tasks={tasks} />
      <div className="columns">
        {COLUMNS.map((col) => (
          <Column
            key={col}
            title={col}
            tasks={tasks.filter((t) => t.status === col)}
            onMove={moveTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;
