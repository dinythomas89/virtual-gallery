import { useImageStore } from "../store/imageStore";
import ImageCard from "./ImageCard";

const Favourites = () => {
  const ids = useImageStore((state) => state.ids);
  const data = useImageStore((state) => state.data);
  const favouriteImages = data.filter((item) => ids.includes(item.id));
  console.log(favouriteImages);

  return (
    <div className="card-container">
      {favouriteImages.map((item) => (
        <ImageCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Favourites;
