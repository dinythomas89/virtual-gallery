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
}

const ImageCard = ({ item }: ImageCardProps) => {
  const [likedCardIds, toggleLike] = useLikeButtonStore((state) => [
    state.likedCardIds,
    state.toggleLike,
  ]);
  const isSelected = likedCardIds.includes(item.id);

  return (
    <ImageCardContainer>
      <CardImage src={item.url} alt="" />
      <CardText>Photographer: {item.photographer}</CardText>
      <Button
        onClick={() => {
          toggleLike(item.id);
        }}
        isSelected={isSelected}
      >
        <AiFillLike />
      </Button>
    </ImageCardContainer>
  );
};

export default ImageCard;
