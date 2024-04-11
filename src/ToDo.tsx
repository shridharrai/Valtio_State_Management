import { useSnapshot } from "valtio";
import { toDoStore } from "./store";
import { useState } from "react";
import ShortUniqueId from "short-unique-id";

const uniqueId = new ShortUniqueId();
const ToDo = () => {
  const snapshot = useSnapshot(toDoStore);
  const [text, setText] = useState("");

  const addToDo = () => {
    toDoStore.set(uniqueId.rnd(), { text });
    setText("");
  };

  const deleteToDo = (key: string) => {
    toDoStore.delete(key);
  };

  return (
    <div className="flex flex-col justify-center items-start">
      <div className="flex gap-8 mb-8">
        <textarea
          className="bg-gray-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-green-500 p-2" onClick={addToDo}>
          Add
        </button>
        <button className="bg-red-500 p-2" onClick={() => toDoStore.clear()}>
          Clear All
        </button>
      </div>
      {Array.from(snapshot.keys()).map((key) => (
        <div key={key} className="mb-4 flex gap-4 justify-center items-center">
          <p className="text-blue-400">{snapshot.get(key)?.text}</p>
          <button
            onClick={() => deleteToDo(key)}
            className="text-red-500 font-bold text-xl"
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
