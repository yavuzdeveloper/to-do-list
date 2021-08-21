import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, 
    title: "Go to the market", 
    completed: false 
  },
  { id: 2, 
    title: "Pay the bills", 
    completed: true 
  }
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTitle, setNewTitle] = useState("");

 
  const addNew = title => { 
    if(title){
      setList([...list, { id: Date.now(), title, completed: false }]);
      setNewTitle("");
    } else {
      alert("Please add a to do")
    }
  };

  const markCompleted = id => {
    setList(list.map(el => el.id === id ? {...el, completed: !el.completed } : el ));
  }
 
  const clearCompleted = () => {
    setList(list.filter(item => !item.completed))
  }

  return (
    <div className="App">
      <h1 className="title">To do List</h1>
        <div className="add_form">
        <label>add to do</label>
          <input 
            value={newTitle} 
            onChange={(e) => setNewTitle(e.target.value)} 
            placeholder="add to do" 
          />
          <button onClick={() => addNew(newTitle)}>Add</button>
        </div>
        <div className="list">
          {list.map((item, index) => (
            <div 
              key = {index}
              onClick={() => markCompleted(item.id)}
              className={item.completed ? "completed" : ""}
            >
              {item.title}
            </div>
          ))}
        </div>
      <button onClick={() => clearCompleted()} className="clear">Clear Completed</button>
    </div>
  );
}
