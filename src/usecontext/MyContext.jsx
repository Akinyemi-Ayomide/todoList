import { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const storedTodos = JSON.parse(localStorage.getItem('todoList')) || [];
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState(storedTodos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [details, setDetails] = useState('');

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };
  const handleOpenModel = (todo) => {
    console.log('Opening modal with:', todo);
    setDetails(todo); // Update the details with the specific `todo`
    setIsModalOpen(true); // Open the modal
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const updateTodo = (newValue) => {
    setTodoList(todoList.map((item) => (item === details ? newValue : item)));
    closeModal();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === '') return; // Prevent adding empty tasks
    setTodoList([...todoList, todo.trim()]); // Add trimmed task
    setTodo(''); // Clear input
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <MyContext.Provider
      value={{
        todo,
        setTodo,
        todoList,
        setTodoList,
        deleteTodo,
        isModalOpen,
        closeModal,
        details,
        setDetails,
        handleOpenModel,
        setIsModalOpen,
        updateTodo,
        handleSubmit,
        handleChange,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
