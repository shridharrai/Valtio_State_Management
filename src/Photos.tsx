import { useSnapshot } from "valtio";
import store from "./store";

const Photos = () => {
  const { photos } = useSnapshot(store);
  //   console.log("Insdie photos");

  return (
    <div className="mt-4 flex flex-wrap">
      {photos.map((photo: any) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} />
        </div>
      ))}
    </div>
  );
};

export default Photos;
