import { FaPlus } from 'react-icons/fa6';

const Form = () => {

const handleSubmit= (e) =>{
    e.preventDefault();

    e.target.reset()
}

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="todo">
          <input
            name="todo"
            type="text"
            id="todo"
            placeholder="Write your next week..."
          />
        </label>
        <button>
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default Form;
