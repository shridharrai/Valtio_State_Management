import { subscribe, useSnapshot } from "valtio";
import store, { derivedStore, increaseCounter, testStore } from "./store";
import { useEffect } from "react";
import { subscribeKey, watch } from "valtio/utils";

const Counter = () => {
  useEffect(() => {
    // subscribe(store, () => console.log("Store is ", store));
    // const unsub = subscribe(store.obj, () =>
    //   console.log("Store obj is ", store.obj)
    // );
    // const unsub = subscribeKey(store, "counter", (value) =>
    //   console.log("Counter is ", value)
    // );

    const unsub = watch((get) => {
      const counter = get(store).counter;
      const x = get(testStore).x;
      // console.log("Watcxhing counter ", counter, x);
    });

    return () => {
      unsub();
    };
  }, []);
  // const { counter } = useSnapshot(store);
  const { counter, doubleCounter } = useSnapshot(derivedStore);

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="bg-blue-500 p-2 hover:bg-blue-900"
        onClick={() => {
          increaseCounter();
        }}
      >
        count is {counter}
      </button>
      <h1>{doubleCounter}</h1>
      <button
        className="bg-green-500 p-2 hover:bg-green-900"
        onClick={() => {
          store.obj.x += 1;
        }}
      >
        Button
      </button>
    </div>
  );
};

export default Counter;
