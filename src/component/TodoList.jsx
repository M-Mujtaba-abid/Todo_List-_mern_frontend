// src/components/TodoApp.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, addTodo, updateTodo, deleteTodo } from "../store/thunk/TodoThunk";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todo);

  const [form, setForm] = useState({ title: "", description: "", status: "pending" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(updateTodo({ id: editId, data: form }));
      setEditId(null);
    } else {
      dispatch(addTodo(form));
    }
    setForm({ title: "", description: "", status: "pending" });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />

        {/* STATUS DROPDOWN */}
        <select
          className="border p-2 rounded"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {editId ? "Update Todo" : "Add Todo"}
        </button>
      </form>

      {/* TODOS LIST */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="border p-2 rounded flex justify-between items-center"
          >
            <div>
              <h2 className="font-bold">{todo.title}</h2>
              <p>{todo.description}</p>
              <p className="text-sm text-gray-500">Status: {todo.status}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditId(todo._id);
                  setForm({ 
                    title: todo.title, 
                    description: todo.description, 
                    status: todo.status 
                  });
                }}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTodo(todo._id))}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
