import { useRef, useState } from "react";

import todo_icon from "../assets/todo_icon.png";
import ListItems from "./ListItems";

const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodoList] = useState([]);

  const addHandler = () => {
    const inputTask = inputRef.current.value.trim();
    if (!inputTask) {
      return null;
    }
    const taskData = {
      id: Date.now(),
      text: inputTask,
      isComplete: false,
    };

    setTodoList((prevData) => [...prevData, taskData]);
    inputRef.current.value = "";
  };

  const deleteHandler = (id) => {
    setTodoList((prevData) => {
      return prevData.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/*-----------Title------------*/}
      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="To-Do icon" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/*-----------Input Box------------*/}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add Your Task"
        />
        <button
          onClick={addHandler}
          className="border-none rounded-full bg-orange-400 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD Task
        </button>
      </div>

      {/*-----------List Items------------*/}
      <div>
        {todoList.map((item, idx) => {
          return (
            <ListItems
              key={idx}
              id={item.id}
              text={item.text}
              isComplete={item.isComplete}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
