import Task from "./Task";

const TaskList = ({ tasks, onRemove }) => {
  return (
    <div className="max-container p-4">
      <h2 className="text-heading-2">Today&apos;s Tasks</h2>
      <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Task data={task} onRemove={onRemove} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
