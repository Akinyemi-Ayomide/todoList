import { useContext } from 'react';
import { MyContext } from '../usecontext/MyContext';

const TODOlist = ({ todo, index }) => {
  const { deleteTodo, handleOpenModel } = useContext(MyContext);

  return (
    <li className="todo-item">
      <span>{`${index + 1}. ${todo}`}</span>
      <span className='button-group'>
        <button onClick={() => deleteTodo(index)} className="delete-button">
          Delete
        </button>
        <button
          onClick={
            () => handleOpenModel(todo)} // Pass the specific `todo` to handleOpenModel
          className="update-button"
        >
          Update
        </button>
      </span>
    </li>
    
  );
};

export default TODOlist;
