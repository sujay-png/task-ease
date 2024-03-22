import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function Foreground() {
  const [todoList, setTodoList] = useState([]);

  useEffect(()=>{
    // fetch todo data from db and set todoList
  })

  const callback = (title, description) => {
    console.log("in callback: " + title, description);
    console.log("Callback");
    setTodoList([...todoList, { title, description }]);

    // store todo data in db
  }

  const addTodo = () => {
    setTodoList([...todoList, { title: '', description: '' }]);
  }

  return (
    <>
      <div className="absolute bottom-10 right-10">
        <button className="bg-zinc-300 p-4 rounded-lg font-bold" onClick={addTodo}>Add</button>
      </div>
      <div className="flex flex-col gap-3 w-full h-full py-4">
        {todoList.map((e, index) => <Cards callback={callback} key={index} title={e.title} description={e.description}/>)}
      </div>
    </>
  );
}

export default Foreground;
