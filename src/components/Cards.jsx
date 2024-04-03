import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion";

function Cards({ callback, removeCallback, title, description, reference }) {
  const [localTitle, setLocalTitle] = useState(title);
  const [localDescription, setLocalDescription] = useState(description);

  const handleTitleChange = (e) => {
    setLocalTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setLocalDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Handle submission logic here
    console.log(localTitle + " From here");
    console.log(localDescription);

    callback(localTitle, localDescription);
  };

  const handleRemove = () => {
    removeCallback();
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="w-60 h-72 rounded-[20px] bg-zinc-900/90 p-3 font-black text-zinc-700 mx-10 relative cursor-pointer"
    >
      <button
        className="absolute top-2 right-2  text-slate-50 rounded px-2"
        onClick={handleRemove}
      >
        <RxCrossCircled />
      </button>
      <form onSubmit={submitHandler}>
        {/* Title */}
        <input
          type="text"
          className="w-48 m-3 h-12 border-none outline-none placeholder-gray-400 text-slate-50 bg-inherit text-3xl font-semibold border-b-10 border-gray-400 input"
          placeholder="Title"
          value={localTitle}
          onChange={handleTitleChange}
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        />

        <hr />

        {/* Description */}
        <textarea
          
          className="resize-none rounded-md p-2 w-full h-[8rem] focus:outline-none bg-inherit text-slate-50 cursor-pointer"
          placeholder="Write your description..."
          value={localDescription}
          onChange={handleDescriptionChange}
          spellCheck="false"
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
    </motion.div>
  );
}

export default Cards;
