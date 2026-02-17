import TaskCard from "./TaskCard";

function Column({ title, tasks, onMove, onDelete }) {
  return (
    <div className="column">
      <h2 className="column-title">{title}</h2>
      <div className="column-tasks">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onMove={onMove} onDelete={onDelete} />
        ))}
        {tasks.length === 0 && <p className="empty-column">No tasks</p>}
      </div>
    </div>
  );
}

export default Column;
