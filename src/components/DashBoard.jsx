import React, { useEffect, useState } from "react";
import { app, db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const DashBoard = () => {
  const [value, setValue] = useState("");
  const [editInput, setEditInput] = useState("");
  const [editIndexNumber, setEditIndexNumber] = useState(null);
  const [todos, setTodos] = useState([]);

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "todos"), {
        todoValue: value,
        CreateDate: serverTimestamp(),
      });
      fetchTodos();
      setValue(""); // clear input after adding
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
      fetchTodos();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = (indexOldEdit) => {
    setEditIndexNumber(indexOldEdit);
    setEditInput(todos[indexOldEdit].todoValue);
  };

  const handleSave = async (id, newValue) => {
    try {
      const docRef = doc(db, "todos", id);
      await updateDoc(docRef, {
        todoValue: newValue,
        updatedAt: serverTimestamp(),
      });

      fetchTodos();
      setEditInput("");
      setEditIndexNumber(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const querySnapShot = await getDocs(collection(db, "todos"));
      const tempArr = [];
      querySnapShot.forEach((doc) => {
        tempArr.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setTodos(tempArr);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📋 Todo Dashboard</h2>

      {/* Input Section */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="list-group">
        {todos.map((item, index) =>
          editIndexNumber === index ? (
            <li key={item.id} className="list-group-item d-flex">
              <input
                type="text"
                className="form-control me-2"
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
              />
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => handleSave(item.id, editInput)}
              >
                Save
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setEditIndexNumber(null);
                  setEditInput("");
                }}
              >
                Cancel
              </button>
            </li>
          ) : (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.todoValue}
              <div>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default DashBoard;
