import { Suspense, useEffect } from "react";
import "./App.css";
import Counter from "./Counter";
import Photos from "./Photos";
import { devtools } from "valtio/utils";
import store from "./store";

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
        <Counter />
        <Suspense fallback={<>Loading...</>}>
          <Photos />
        </Suspense>
      </div>
    </>
  );
}

export default App;
