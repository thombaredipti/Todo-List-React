import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const todoName = window.prompt('Enter todo:');
    if (todoName) {
      setTodos([...todos, todoName]);
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = (index) => {
    const newTodoName = window.prompt('Update todo:', todos[index]); // Prompt with the current todo
    if (newTodoName) {
      const newTodos = [...todos];
      newTodos[index] = newTodoName; // Update the specific todo item
      setTodos(newTodos);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="border border-gray-200 shadow w-[40vw] h-[40vh] flex flex-col justify-between items-center bg-white p-6">
          <h1 className="text-blue-800 font-bold text-xl mb-4">Create Todo List</h1>
          
          <ul className="overflow-auto h-[50%] w-full px-4">
            {todos.map((val, i) => (
              <li key={i} className="flex justify-between items-center mb-2">
                {val}
                <div className="flex">
                  <button 
                    onClick={() => removeTodo(i)} 
                    className="bg-red-500 text-white p-1 ml-1 rounded-md shadow"
                  >
                    Remove
                  </button>
                  <button 
                    onClick={() => updateTodo(i)} 
                    className="bg-green-500 text-white p-1 ml-1 rounded-md shadow"
                  >
                    Update
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <button onClick={addTodo} className="bg-black text-white p-2 m-4 rounded-md shadow w-[100px]">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;

