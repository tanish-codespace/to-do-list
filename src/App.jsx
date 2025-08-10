import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask(newTask) {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setInput("");
  }

  function deleteTask() {
    setTasks(tasks.slice(0, -1));
  }

  function deleteAll() {
    setTasks([]);
  }

  function toggleTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4 bg-gradient-to-br from-blue-50 to-blue-100">
      <h1 className="text-3xl text-blue-500 font-bold">TO-DO LIST</h1>

      <div className="flex gap-2">
        <input
          value={input}
          placeholder="enter task"
          className="font-bold border border-gray-300 rounded-lg px-2 py-1"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
          onClick={() => addTask(input)}
        >
          Add
        </button>
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700"
          onClick={deleteTask}
        >
          Delete
        </button>
        <button
          className="bg-orange-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500"
          onClick={deleteAll}
        >
          Clear All
        </button>
      </div>

      <div className="bg-white rounded shadow-md px-4 py-2 min-h-[150px] w-64 flex flex-col">
        {tasks.length === 0 ? (
          <p className="text-gray-400 italic">No tasks yet. Add one above!</p>
        ) : (
          <ul className="list-none pl-0">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center gap-2 py-1"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                />
                <span className={task.completed ? "line-through text-gray-500" : ""}>
                  {task.text}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
