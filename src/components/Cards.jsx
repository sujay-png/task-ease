import React, { useState } from "react";

function Cards({ callback, title, description }) {

  const [localTitle, setTitle] = useState(title);
  const [localDescription, setDescription] = useState(description);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Handle submission logic here
    console.log(localTitle + " From here");
    console.log(localDescription);

    callback(localTitle, localDescription);    
  };  

  return (
    <div className="w-60 h-72 rounded-[20px] bg-zinc-900/90 p-3 font-black text-zinc-700 mx-10">
      <form onSubmit={submitHandler}>
        {/* Title */}
        <input
          type="text"
          className="w-48 m-3 h-12 border-none outline-none placeholder-gray-400 text-slate-50 bg-inherit text-3xl font-semibold border-b-10 border-gray-400 input"
          placeholder="Title"
          value={localTitle}
          onChange={handleTitleChange}
          onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
        />

        <hr />

        {/* Description */}
        <textarea
          className="resize-none rounded-md p-2 w-full h-[8rem] focus:outline-none bg-inherit"
          placeholder="Write your description..."
          value={localDescription}
          onChange={handleDescriptionChange}
        ></textarea>

        {/* Add button */}
        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="right-0 bottom-0 m-5 px-5 py-2 bg-zinc-700 text-slate-50 rounded"
          >
            Add List
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cards;
