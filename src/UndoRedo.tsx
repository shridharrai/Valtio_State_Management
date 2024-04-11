import { useSnapshot } from "valtio";
import {
  decreaseUndoRedoCounter,
  increaseUndoRedoCounter,
  undoRedoStore,
} from "./store";

const UndoRedo = () => {
  const {
    value: { counter },
    history,
    undo,
    redo,
    isUndoEnabled,
    isRedoEnabled,
  } = useSnapshot(undoRedoStore);

  console.log("Is undo ", isUndoEnabled);
  console.log("History is ", history);

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        className="bg-blue-500 p-2 hover:bg-blue-900"
        onClick={increaseUndoRedoCounter}
      >
        Increase
      </button>
      <button
        className="bg-red-500 p-2 hover:bg-red-900"
        onClick={decreaseUndoRedoCounter}
      >
        Decrease
      </button>
      <h1>{counter}</h1>
      <button
        disabled={!isUndoEnabled}
        onClick={undo}
        className="bg-orange-500 p-2 hover:bg-orange-900"
      >
        Undo
      </button>
      <button
        disabled={!isRedoEnabled}
        onClick={redo}
        className="bg-yellow-500 p-2 hover:bg-yellow-900"
      >
        Redo
      </button>
    </div>
  );
};

export default UndoRedo;
