function TaskCard({ task, onMove, onDelete }) {
  const statuses = ["To Do", "Doing", "Done"];

  function handleDelete() {
    if (window.confirm(`Are you sure you want to delete "${task.title}"?`)) {
      onDelete(task.id);
    }
  }

  return (
    <div className={`task-card priority-${task.priority.toLowerCase()}`}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <span className="task-priority">{task.priority}</span>
      </div>
      <div className="task-actions">
        {statuses.map((s) => (
          <button
            key={s}
            className="btn-move"
            disabled={s === task.status}
            onClick={() => onMove(task.id, s)}
          >
            {s}
          </button>
        ))}
        <button className="btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
