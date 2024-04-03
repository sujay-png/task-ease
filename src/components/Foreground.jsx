import React, { useEffect, useRef, useState } from "react";
import Cards from "./Cards";

function Foreground() {
  const ref = useRef(null);

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // fetch todo data from local storage or other sources and set todoList
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  const handleCardChange = (index, title, description) => {
    if (title !== "" && description !== "") {
      const updatedTodoList = [...todoList];
      updatedTodoList[index] = { title, description };
      setTodoList(updatedTodoList);
      // Update local storage or other storage mechanism
      localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    }
  };

  const handleCardRemove = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
    // Update local storage or other storage mechanism
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
  };

  const addTodo = () => {
    setTodoList([...todoList, { title: "", description: "" }]);
    // Update local storage or other storage mechanism
    localStorage.setItem(
      "todoList",
      JSON.stringify([...todoList, { title: "", description: "" }])
    );
  };

  return (
    <div ref={ref} className="flex" overflow-hidden>
      <div className="absolute bottom-10 right-10">
        <button
          className="bg-zinc-300 p-4 rounded-lg font-bold"
          onClick={addTodo}
        >
          Create Card
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {todoList.map((e, index) => (
          <Cards
            key={index}
            title={e.title}
            description={e.description}
            callback={(title, description) =>
              handleCardChange(index, title, description)
            }
            removeCallback={() => handleCardRemove(index)}
            reference={ref}
          />
        ))}
      </div>
    </div>
  );
}

export default Foreground;
