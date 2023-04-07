import { AiFillLike } from "react-icons/ai";
import { Data } from "../model/Data";
import {
  Button,
  CardImage,
  CardText,
  ImageCardContainer,
} from "../styles/imageCard.styles";
import { useLikeButtonStore } from "../store/likeButtonStore";

interface ImageCardProps {
  item: Data;
  onClick?: () => void;
}

const ImageCard = ({ item, onClick }: ImageCardProps) => {
  const [liked, setLiked] = useLikeButtonStore((state) => [
    state.liked,
    state.setLiked,
  ]);
  const isSelected = liked.includes(item.id);

  return (
    <ImageCardContainer>
      <CardImage src={item.url} alt="" />
      <CardText>Photographer: {item.photographer}</CardText>
      {onClick ? (
        <Button
          onClick={() => {
            onClick();
            setLiked(item.id);
          }}
          isSelected={isSelected}
        >
          <AiFillLike />
        </Button>
      ) : (
        ""
      )}
    </ImageCardContainer>
  );
};

export default ImageCard;
