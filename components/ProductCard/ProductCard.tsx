import { CardContainer } from "./styles";
import Image from "next/image";

type Props = {
  src: string;
  large?: boolean;
};
const ProductCard = ({ src, large }: Props) => {
  return (
    <CardContainer large={large} src={src}>
      {/* <Image alt="Product card" src={src} layout="fill" objectFit="contain" /> */}
    </CardContainer>
  );
};

export default ProductCard;
