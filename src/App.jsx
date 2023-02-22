import Task from "./assets/components/Task.jsx";
import TaskForm from "./assets/components/TaskForm.jsx";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <Task />
      </div>
    </main>
  );
}

export default App;
