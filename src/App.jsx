import { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import TODOlist from './components/TODOlist';
import { MyContext } from './usecontext/MyContext';
import Modal from './components/Modal';

function App() {
  const { todo, todoList, handleSubmit, handleChange } = useContext(MyContext);

  return (
    <>
      <div className="todo-container">
        <Header />
        <form onSubmit={handleSubmit} className="todo-input-wrapper">
          <input
            type="text"
            className="todo-input"
            placeholder="Enter a new task"
            value={todo}
            onChange={handleChange}
          />
          <button className="add-button" type="submit">
            Add Task
          </button>
        </form>
        <ul className="todo-list">
          {todoList.map((task, index) => (
            <TODOlist key={index} todo={task} index={index} />
          ))}
        </ul>
        <Modal />
      </div>
    </>
  );
}

export default App;
