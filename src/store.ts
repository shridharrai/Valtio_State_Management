import { proxy, snapshot } from "valtio";
import { derive } from "valtio/utils";

const store = proxy({
  counter: 0,
  photos: [],
  // fetch("https://jsonplaceholder.typicode.com/photos")
  //   .then((res) => res.json())
  //   .then((data) => data),
  obj: { x: 10 },
});

export const derivedStore = derive(
  {
    doubleCounter: (get) => get(store).counter * 2,
  },
  {
    proxy: store,
  }
);

export const testStore = proxy({
  x: 20,
});

// console.log("Store is ", store);
// console.log("Snapshot is ", snapshot(store));

export const increaseCounter = () => (store.counter += 1);
export const decreaseCounter = () => (store.counter -= 1);
export const increaseBy = (by: number) => (store.counter += by);
export const decreaseBy = (by: number) => (store.counter -= by);
export const reset = () => (store.counter = 0);

export default store;
