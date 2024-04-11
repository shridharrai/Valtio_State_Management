import { Suspense, useEffect } from "react";
import "./App.css";
import Counter from "./Counter";
import Photos from "./Photos";
import { devtools } from "valtio/utils";
import store from "./store";
import UndoRedo from "./UndoRedo";
import ToDo from "./ToDo";

function App() {
  useEffect(() => {
    const unsub = devtools(store, { name: "My Store", enabled: true });

    return () => {
      if (unsub) unsub();
    };
  }, []);

  return (
    <>
      <div className="card">
        {/* <Counter />
        <UndoRedo />
        <Suspense fallback={<>Loading...</>}>
          <Photos />
        </Suspense> */}
        <ToDo />
      </div>
    </>
  );
}

export default App;
