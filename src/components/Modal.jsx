import React, { useContext, useState } from 'react';
import { MyContext } from '../usecontext/MyContext';

const Modal = () => {
  const { isModalOpen, closeModal, updateTodo, details } =
    useContext(MyContext);
  const [inputValue, setInputValue] = useState(details);

  // Update the input value when modal opens with new details
  React.useEffect(() => {
    setInputValue(details);
  }, [details]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Update To-Do</h2>
        <input
          type="text"
          className="w-full border rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => {
              updateTodo(inputValue);
              closeModal();
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
