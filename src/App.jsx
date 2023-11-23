import { useEffect, useState } from "react";
import { Header, TaskList, AddForm } from "./components";

const App = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  function handleRemoveTask(id) {
    const updatedTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="min-h-screen bg-neutral-200 text-neutral-950">
      <Header />
      <TaskList tasks={tasks} onRemove={handleRemoveTask} />
      <AddForm onAddTask={handleAddTask} />
    </div>
  );
};

export default App;
