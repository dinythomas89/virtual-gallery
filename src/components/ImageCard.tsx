import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { Data } from "../model/Data";
import {
  Button,
  CardImage,
  CardText,
  ImageCardContainer,
} from "../styles/imageCard.styles";

interface ImageCardProps {
  item: Data;
  onClick?: () => void;
}

const ImageCard = ({ item, onClick }: ImageCardProps) => {
  const [buttonColor, setButtonColor] = useState(false);

  return (
    <ImageCardContainer>
      <CardImage src={item.url} alt="" />
      <CardText>Photographer: {item.photographer}</CardText>
      {onClick ? (
        <Button
          selected={buttonColor}
          onClick={() => {
            onClick();
            setButtonColor(true);
          }}
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
