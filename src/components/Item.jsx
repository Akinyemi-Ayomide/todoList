import { FaRegDotCircle } from 'react-icons/fa';
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
const Item = () => {
  return (
    <div>
      <li id={item?.id} className='todo_item'>
        <button className="todo_items_left">
          <FaRegDotCircle />
        </button>
        <p>{item?.title}</p>
        <div className='tod_items_right'>
          <button><FiEdit /></button>
          <button><RiDeleteBinLine /></button>
        </div>
      </li>
    </div>
  );
};

export default Item;
