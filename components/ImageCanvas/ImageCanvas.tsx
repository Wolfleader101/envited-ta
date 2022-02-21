import { CanvasContainer, StyledCanvas } from "./styles";
type Props = {
  styleWidth: number;
  styleHeight: number;
  imageUrl: string;
};

const ImageCanvas = ({ imageUrl, styleWidth, styleHeight }: Props) => {
  return (
    <CanvasContainer>
      <StyledCanvas src={imageUrl} width={styleWidth} height={styleHeight}></StyledCanvas>
    </CanvasContainer>
  );
};

export default ImageCanvas;
