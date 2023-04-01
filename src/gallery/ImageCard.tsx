import { AiFillLike } from "react-icons/ai";
import { Data } from "../model/Data";

interface ImageCardProps{
    item:Data;
    onClick?:()=>void
}

const ImageCard = ({ item, onClick }:ImageCardProps) => {
  return (
    <div className="card-component">
      <img src={item.url} alt="" />
      <p>Photographer: {item.photographer}</p>
      {onClick ? (
        <button onClick={onClick}>
          <AiFillLike />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageCard;
